const express = require("express");
const userData = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

const html = `
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Details</title>
</head>

<body
    style="font-family: Arial, sans-serif; background-color: #f4f4f9; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">
    <div style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap;">

        ${userData.map((user, i) => {
          return `        
        <div
            style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 10px; text-align: center;">
            <h2 style="color: #333; margin-bottom: 20px;">User Profile</h2>
            <div style="margin-bottom: 15px;">
                <span style="font-weight: bold; color: #555;">ID:</span>
                <span style="color: #333;">${user.id}</span>
            </div>
            <div style="margin-bottom: 15px;">
                <span style="font-weight: bold; color: #555;">First Name:</span>
                <span style="color: #333;">${user.first_name}</span>
            </div>
            <div style="margin-bottom: 15px;">
                <span style="font-weight: bold; color: #555;">Last Name:</span>
                <span style="color: #333;">${user.last_name}</span>
            </div>
            <div style="margin-bottom: 15px;">
                <span style="font-weight: bold; color: #555;">Email:</span>
                <span style="color: #333;">${user.email}</span>
            </div>
            <div style="margin-bottom: 15px;">
                <span style="font-weight: bold; color: #555;">Gender:</span>
                <span style="color: #333;">${user.gender}</span>
            </div>
            <div style="margin-bottom: 15px;">
                <span style="font-weight: bold; color: #555;">Job Title:</span>
                <span style="color: #333;">${user.job_title}</span>
            </div>
        </div>`;
        })}

    </div>

</body>

</html>`;

// Data Get Middle layer
app.use(express.urlencoded({ extended: true }));

// GET All users data/ Details

app.get("/users", (req, res) => {
  res.send(html);
});

app.get("/api/users", (req, res) => {
  res.json(userData);
});

// GET user destils using ID uniqe user data get
// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = userData.filter((user) => user.id === id);

//   res.json(user);
// });

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
// app.delete("/users/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = userData.findIndex((user) => user.id === id);
//   if (index === -1) {
//     return res.json({ mess: "User Not Found" });
//   }
//   const deleteUser = userData.splice(index, 1);
//   res.json({ deleteUser });
// });



// Group Rotuing
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = userData.filter((user) => user.id === id);

    res.json(user);
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    console.log("id...", id);
    
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
