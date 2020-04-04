const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports.index = async (request, response) => {
  let { latitude, longitude, techs } = request.query;
  techs = parseStringAsArray(techs);

  const devs = await Dev.find({
    techs: {
      $in: techs,
    },
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        $maxDistance: 10000,
      },
    },
  });

  return response.json({ devs });
};
