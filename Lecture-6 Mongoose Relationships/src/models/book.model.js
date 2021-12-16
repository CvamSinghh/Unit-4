const  mongoose = require("mongoose");



const bookSchema = new mongoose.Schema({
    title: {type: String,required: true},
    author_name: { type: mongoose.Schema.Types.ObjectId, ref : "author",required: true},
    section: { type: mongoose.Schema.Types.ObjectId, ref:"section",required: true}

}, {
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("book", bookSchema);
