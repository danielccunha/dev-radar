require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const port = process.env.PORT || 3333;
const server = http.Server(app);
setupWebSocket(server);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, () => {
  return console.log(`Listening on port ${chalk.green(port)}`);
});
