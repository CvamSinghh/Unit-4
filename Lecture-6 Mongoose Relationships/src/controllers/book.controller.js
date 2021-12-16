

const express = require(`express`)

const Book = require(`../models/book.model`)

const router = express.Router()


router.get("/", async (req, res) => {
    try {

        const book = await Book.find().populate({ path: "author_name", select: "author_name" })
            .populate({ path: "section", select: "sec_name" })
        return res.status(201).send(book)

    } catch (err) {

        return res.status(500).json({ message: err.message, status: "Failed" });

    }
})


// for finding the book of a particular author

router.get("/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        const book = await Book.find({ author_name :req.params.id }).populate({ path: "author_name", select: "author_name" })
            .populate({ path: "section", select: "sec_name" })
        
        console.log("book", book)
        console.log("Book", Book)      

        return res.status(201).send(book)

    } catch (err) {

        return res.status(500).json({ message: err.message, status: "Failed" });

    }
})


// for finding the books in a section

router.get("/section/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        const book = await Book.find({ section: req.params.id }).populate({ path: "author_name", select: "author_name" })
            .populate({ path: "section", select: "sec_name" })

        console.log("book", book)
        console.log("Book", Book)

        return res.status(201).send(book)

    } catch (err) {

        return res.status(500).json({ message: err.message, status: "Failed" });

    }
})




// for finding the book of a particular author in a particular section

router.get("/section/:sid/author/:aid", async (req, res) => {
    try {
        console.log(req.params.id)
        const book = await Book.find({$and: [{ section:{$eq: req.params.sid} },{ author: {$eq:req.params.aid} }]}).populate({ path: "author_name", select: "author_name" })
            .populate({ path: "section", select: "sec_name" })

        console.log("book", book)
        console.log("Book", Book)

        return res.status(201).send(book)

    } catch (err) {

        return res.status(500).json({ message: err.message, status: "Failed" });

    }
})



router.post("/", async (req, res) => {
    try {

        const book = await Book.create(req.body)
        return res.status(201).send(book)

    } catch (err) {

        return res.status(500).json({ message: err.message, status: "Failed" });

    }
})


router.patch("/:id", async (req, res) => {
    try {

        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).lean().exec();

        return res.status(201).send(book)

    } catch (err) {

        return res.status(500).json({ message: err.message, status: "Failed" });

    }
})


router.delete("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(book)

    } catch (err) {
        return res.status(500).json({ message: err.message, status: "Failed" });
    }
})


module.exports = router