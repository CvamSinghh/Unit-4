
const express = require("express");
const app = express();
const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/mongoCommands', {

        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}


app.use(express.json());

const moviesSchema = new mongoose.Schema({

    id:
        { type: Number },
    movie_name: {
        type: String,
        required: true
    },
    movie_genre: {
        type: String,
        required: true
    },

    production_year: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    }
    
}, {
    versionKey: false,
    timestamps: true,

})


const datas = new mongoose.model("data", moviesSchema);

app.get("/", async (req, res) => {
    try {
        const data = await datas.find().lean().exec();
        res.status(201).send(data)
    } catch (err) {
        res.status(500).json(err)
    }
    
})


app.get("/:id", async (req, res) => {
    try {
        const data = await datas.find({"id":req.params.id}).lean().exec();
        res.status(201).send(data)
    } catch (err) {
        res.status(500).json(err)
    }

})

app.post("/", async (req, res) => {
    try {
        const data = await datas.create(req.body)
        res.status(201).send(data)
    } catch (err) {
        res.status(500).json(err)
    }

})

app.delete("/:id", async (req, res) => {
    try {
    const data = await datas.findOneAndDelete({"id":req.params.id})
        res.status(201).send(data)
    } catch (err) {
        res.status(500).json(err)
    }

})

app.patch("/:id", async (req, res) => {
    try {
        const data = await datas.findByIdAndUpdate(req.params.id,req.body,{new:true})
        
        res.status(201).send(data)
    } catch (err) {
        res.status(500).json(err)
    }

})



app.listen(3000, async () => {
    await connect();
    console.log("connected");
})


