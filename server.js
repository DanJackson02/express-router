const express = require("express");
const app = express();;
const port = 3000;
// Express Routes
const usersRouter = require("./routes/users");
const fruitRouter = require("./routes/fruit");

app.use("/users", usersRouter);
app.use("/fruit", fruitRouter);

app.use("/users/id", usersRouter);
app.use("/fruits/id", fruitRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
