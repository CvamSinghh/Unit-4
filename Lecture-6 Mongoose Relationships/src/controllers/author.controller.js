

const express = require(`express`)

const Author = require(`../models/author.model`)

const router = express.Router()


router.get("/", async (req, res) => {
    try {

        const author = await Author.find()
        return res.status(201).send(author)

    } catch (err) {

        return res.status(500).json({ message: e.message, status: "Failed" });

    }
})


router.post("/", async (req, res) => {
    try {

        const author = await Author.create(req.body)
        return res.status(201).send(author)

    } catch (err) {

        return res.status(500).json({ message: e.message, status: "Failed" });

    }
})


router.patch("/:id", async (req, res) => {
    try {

        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).lean().exec();

        return res.status(201).send(author)

    } catch (err) {

        return res.status(500).json({ message: e.message, status: "Failed" });

    }
})


router.delete("/:id", async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(author)

    } catch (err) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})


module.exports = router