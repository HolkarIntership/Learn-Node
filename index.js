const express = require("express");
const userData = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

// Data Get Middle layer
app.use(express.urlencoded({ extended: true }));

// GET All users data/ Details

app.get("/users", (req, res) => {
  res.json(userData);
});

// GET user destils using ID uniqe user data get
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = userData.filter((user) => user.id === id);

  res.json(user);
});

// POST Creata a New User
app.post("/users", (req, res) => {
  const User = req.body;
  newUser = {
    id: userData.length + 1,
    ...User,
  };
  userData.push(newUser);
  res.json(newUser);
});

// DElETE User
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = userData.findIndex((user) => user.id === id);
  if (index === -1) {
    return res.json({ mess: "User Not Found" });
  }
  const deleteUser = userData.splice(index, 1);
  res.json({ deleteUser });
});

app.listen(PORT, () => {
  console.log(`server is start PORT: ${PORT}`);
});
