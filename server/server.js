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
app.get("/api/db", (req, res) => {
  const a = db.query("select * from users;");
  console.log(a);
  res.send(a);
});

//Posts

//Port start
app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is now active on port 8000");
});
