const express = require("express");
const mongoose = require("mongoose");
const sendMail = require("../utils/send_mail");



const router = express.Router();

const User = require("../models/user.model");
const transporter = require("../configs/mail")


router.get("/", async (req, res) => {

    try {

        const page = +req.query.page || 1;
        const size = +req.query.size || 2;

        const offset = (page - 1) * size;

        const user = await User.find().skip(offset).limit(size).lean().exec();

        const total_pages = Math.ceil((await User.find().countDocuments()) / size);

        console.log(total_pages)
        

        res.send({ user });

    } catch (e) {

        res.status(500).json({ message: e.message, status: "failed" });
    }
});

// (from ,to,subject,text,html)
router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);

        const admins = await User.find({ "designation": { $eq: "Admin" } });
          console.log(admins);
        for (let i = 0; i < 4; i++) {
            sendMail(req.body.email, admins[i].email, `${req.body.first_name}${req.body.last_name} has registered with us`, `Please welcome ${req.body.first_name} ${req.body.last_name}`,
                `<h1> created a new user ${req.body.first_name}${req.body.last_name} </h1>`
            )
        }

        return res.status(201).send(user)
    } catch (e) {
        return res.status(500).send({ message: e.message, status: "Failed" })
    }
})




module.exports = router;
