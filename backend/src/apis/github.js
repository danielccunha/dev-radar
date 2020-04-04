const axios = require("axios");

const token = process.env.GITHUB_TOKEN;

module.exports = axios.default.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${token}`,
  },
});
