const express = require("express");

const app = express();

//Gets

//Posts
app.post("/api", (req, res) => {
  console.log("a");
});

app.get("/api", (req, res) => {
  res.json({ Users: ["1", "2", "3"] });
});

//Port start
app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is now active on port 8000");
});
