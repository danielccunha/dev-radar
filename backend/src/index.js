require("dotenv").config();
const chalk = require("chalk");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Listening on port ${chalk.green(port)}`));
