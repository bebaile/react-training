require("dotenv").config();
const express = require("express");
const cors = require("cors");
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

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

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

app.get("/", (req, res) => {
  connection.query("SELECT * FROM contacts", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(`Error retrieving data from the database : ${err}`);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = app;
