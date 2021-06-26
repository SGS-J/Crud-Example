const express = require("express");
const path = require("path");
const logger = require("morgan");

const graphqlHTTP = require("./graphql/init");

const app = express();
const db = require("./database");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", graphqlHTTP);

module.exports = app;
