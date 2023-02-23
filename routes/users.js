const express = require("express")
const usersRouter = express.Router()

let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

usersRouter.get("/", (req, res) => {
    res.json(users)
})

usersRouter.get('/fruit/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id < users.length && id >= 0) {
      res.json(users[id]);
    } else {
      res.status(404).send("User not found");
    }
  });

module.exports = usersRouter;