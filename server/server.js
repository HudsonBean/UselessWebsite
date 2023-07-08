const bcrypt = require("bcrypt");
const express = require("express");
const mysql = require("mysql");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Copsreloaded62$",
  database: "useless_website_db",
});
const app = express();

app.use(express.json());

//Variables

//Gets
app.get("/api/db/users", (req, res) => {
  db.query("select * from users;", (err, rows, fields) => {
    if (err) {
      throw err;
    }
    res.status(200).send(JSON.stringify(rows));
  });
});

//Posts
app.post("/api/db/users/sign-in", async (req, res) => {
  function failed() {}
  //Set client inputted user data in to variables
  clientUserName = req.body[0];
  clientUserEmail = req.body[1];
  clientUserPassword = req.body[2];

  //Check database if the user exists
  let query = // Asking to get all the rows where the user_email equals the inputted client email
    "select * from users where user_email =" +
    "'" +
    clientUserEmail +
    "'" +
    ";";
  db.query(query, (err, rows, fields) => {
    if (err) {
      throw err;
    }
    if (rows && rows.length) {
      let row = rows[0];
      //Found the row with the email, meaning the email has an account
      //Now verify the user inputted password for the email
      bcrypt.compare(
        clientUserPassword,
        rows[0].user_password,
        (err, result) => {
          if (err) {
            throw err;
          }
          if (result) {
            //Correct password
            //console.log("Winner!");
            res.status(202).json(JSON.stringify("Success!")).send("Success!");
          } else {
            //Wrong password
            //console.log("Wrong password :(");
            failed();
          }
        }
      );
    } else {
      //Couldn't find the row with the email
      failed();
    }
  });
});

//Port starts
app.listen(8000, (err) => {
  if (err) {
    throw err;
  }
  console.log("Server is now active on port 8000");
});
