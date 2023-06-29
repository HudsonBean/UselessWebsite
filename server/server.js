const express = require("express");

const app = express();

app.use(express.json());

//Variables

//Gets

//Posts

//Port start
app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is now active on port 8000");
});
