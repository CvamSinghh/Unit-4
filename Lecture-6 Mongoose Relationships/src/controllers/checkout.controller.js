

const express = require(`express`)

const Checkout = require(`../models/checkout.model`)

const router = express.Router()


router.get("/", async (req, res) => {
    try {

        const checkout = await Checkout.find().populate({ path: "user_id", select: "user_name" })
            .populate({ path: "book_id", select: "title" })

        return res.status(201).send(checkout)

    } catch (err) {

        return res.status(500).json({ message: e.message, status: "Failed" });

    }
})


router.post("/", async (req, res) => {
    try {

        const checkout = await Checkout.create(req.body)
        return res.status(201).send(checkout)

    } catch (err) {

        return res.status(500).json({ message: e.message, status: "Failed" });

    }
})


router.patch("/:id", async (req, res) => {
    try {

        const checkout = await Checkout.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).lean().exec();

        return res.status(201).send(section)

    } catch (err) {

        return res.status(500).json({ message: e.message, status: "Failed" });

    }
})


router.delete("/:id", async (req, res) => {
    try {
        const checkout = await Checkout.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(checkout)

    } catch (err) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})


module.exports = router