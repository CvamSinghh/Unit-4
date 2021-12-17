// const express = require(`express`)

const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true, unique : true },
        designation : {type:String , required: false}
    }, {
        versionkeys: false
    });

module.exports = mongoose.model("users", userSchema);
