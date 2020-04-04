const api = require("../apis/github");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports.store = async (request, response) => {
  let { github_username, techs, latitude, longitude } = request.body;
  let dev = await Dev.findOne({ github_username });

  if (!dev) {
    const { data } = await api.get(`users/${github_username}`);
    const { name = login, avatar_url, bio } = data;
    const location = {
      type: "Point",
      coordinates: [longitude, latitude],
    };
    techs = parseStringAsArray(techs);

    dev = await Dev.create({
      name,
      avatar_url,
      bio,
      github_username,
      techs,
      location,
    });
  }

  return response.json(dev);
};

module.exports.index = async (request, response) => {
  const devs = await Dev.find();
  return response.json(devs);
};
