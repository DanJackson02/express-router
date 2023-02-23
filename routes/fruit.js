const express = require("express")
const fruitRouter = express.Router()

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

fruitRouter.get("/", (req, res) => {
    res.json(fruits)
})

fruitRouter.get('/fruits/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id < fruits.length && id >= 0) {
    res.json(fruits[id]);
  } else {
    res.status(404).send("Fruit not found");
  }
});


module.exports = fruitRouter;