const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/TimerTroll.html");
});


const PORT = 8080;
app.listen(process.env.PORT || "5000", (error) => {
  console.log("Server is running on port", PORT);
});

//......
