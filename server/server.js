const express = require("express");

const app = express();

app.use(express.json());

//Variables

//Gets
app.get("/api", (req, res) => {
  res.json({ message: "No message saved yet!" });
});

//Posts
app.post("/api", (req, res) => {
  if (!req.body) {
    res.status(400).send("Error whilst receiving your message.");
  }
  res.status(200).send("Succesfully received your message!");
});

//Port start
app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is now active on port 8000");
});
