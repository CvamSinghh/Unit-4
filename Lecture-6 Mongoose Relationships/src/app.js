const express = require(`express`)
const mongoose = require(`mongoose`)
const app = express();
const port = 3000



app.use(express.json())

const userController = require("./controllers/user.controller")
const sectionController = require("./controllers/section.controller")
const checkoutController = require("./controllers/checkout.controller")
const bookController = require("./controllers/book.controller")
const authorController = require("./controllers/author.controller")
const connect = require("./configs/db")


app.use("/user", userController)
app.use("/section", sectionController)
app.use("/checkout", checkoutController)
app.use("/book", bookController)
app.use("/author",authorController)




app.listen(port, async function () {
     
    await connect();
    console.log(`listening on port ${port}.`)

})

