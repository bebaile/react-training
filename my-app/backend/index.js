require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");

const port = parseInt(process.env.APP_PORT);
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to the database = ${err.stack}`);
  } else {
    console.log(
      `Successfully connected to the database with threadId: ${connection.threadId}`
    );
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("something bad happened");
  } else {
    console.error(`Server listening on port ${port}`);
  }
});

module.exports = app;
