const express = require("express");

const books  = require("./book_data.json");

const app = express();

app.use(express.json());

 // app.use(logger);    we can't use logger before initialisation., just bcoz it is an arrow fun.

// REST API

/* HTTP VERBS

 get- get all items;
 get - single item
 post - create single item
 patch - modify a item
 put - replace a item
 delete - delete a single item

*/


// app.use(userApi);

app.get("/", (req, res) => {   

    const userApi = {
        api_requested_by: "Shivam Singh",
        books
    }
    res.send(userApi)
    
})

app.get("/books/:id", (req, res) => {
    let b = books.filter((el) =>  el.id == req.params.id )
     res.send(b)
})

app.post("/books", (req, res) => {

    const output = [...books, req.body];

    res.send(output);
    
})


app.patch("/books/:id", (req, res) => {
    console.log(req.body);
    
    let b = books.map((el) => {
        if (el.id == req.params.id)
        {
            el.author = req.body.author;
            el.publish_year = req.body.publish_year;
        }
    })
  
    res.send(books)

});


app.delete("/books/:id", (req, res) => {
    let b = books.filter((el) => el.id != req.params.id);
    res.send(b)
})




app.listen(2345, function () {
    console.log("listening on port no 2345");   
})