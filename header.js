const express = require("express");
const userData = require("./MOCK_DATA.json");

const app = express();
app.json()

const PORT = 8000;

app.get("/api/users", (req, res) => {
//   res.setHeader("Content-Type", "text/plain");
  res.setHeader("Custom-Name", "Deepak Singh");
//   res.json(userData);
res.status(200).send("User Detials get succesfully").end(userData)
});

app.listen(PORT, () => {
  console.log(`server is start PORT: ${PORT}`);
});
