const express = require(`express`)

const app = express();
const port = 3000;


app.use(express.json())

const userController = require("./controllers/user.controller")
app.use("/user",userController)




















const connect = require("./configs/db")

app.listen(port, async function() {
    await connect();
    console.log(`listening on port ${port}.`)
})