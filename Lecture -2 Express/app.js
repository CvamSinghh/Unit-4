const express = require("express");

const users = require("./users.json");

const app = express();

app.use(express.json())



// REST API

/* HTTP VERBS

 get- get all items;
 get - single item
 post - create single item
 patch - modify a item
 put - replace a item
 delete - delete a single item

*/

/* Disadvantages of  get
   limited capacity
   everything that you send is visible in request url */
app.get("/", (req, res) => {
   
    res.send(users)
  //  res.send("Singh")  // we can't send response twice for a single request.
   
})

app.post("/", (req, res) => {

    const newUser = [req.body,...users]

    console.log(newUser);
    res.send("posted the data")
    
})

// app.patch("/:id/", (req, res) => {  // if we want to put anything dynamic then, we have to put ": then name of variable "
//     console.log(req.params)
//     res.send("patched data")
    
// });

app.patch("/:email/", (req, res) => {  /* if we want to put anything dynamic then, 
    we have to put ": then name of variable " other wise statics things will be written without ":"
    */
    console.log(req.params.email);

    const newUsers = users.map((user) => {
        if (req.params.email === user.email)
        { return req.body; }
        
        return user;
       
    })
    
    res.send(newUsers)

});

app.delete("/:email", (req, res) => {
    const newUsers = users.filter((user) =>  user.email !== req.params.email );

    res.send(newUsers)
})

app.get("/:email", (req, res) => {
    const nuser = users.filter((user) => user.email == req.params.email );

    res.send(nuser);
})


app.listen(2345, function () {
    console.log("listening on port no 2345");   
})