const express = require("express");
const userData = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

app.use((req, res, next) => {
  console.log("helloo");
  next();
});

app.get("/api/users", (req, res) => {
  res.json(userData);
});

app.use("/api/users/:id", (req, res, next) => {
  const id = Number(req.params.id);
  console.log("id", id);

  if (!id) {
    console.log("invalid User");
    res.send("Invalid User.....");
  }
  const user = userData.filter((user) => user.id === id);

  if (id === user.id) {
    
  }
//   res.send(`this is your ID ${id}`);

  next()
});

app.get("/api/users/:id", (req, res) => {
   const id = Number(req.params.id);
  const user = userData.filter((user) => user.id === id);

  res.json(user);
});

app.listen(PORT, () => {
  console.log(`server is start PORT: ${PORT}`);
});
