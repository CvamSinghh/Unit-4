const mongoose = require(`mongoose`)

const checkoutSchema = new mongoose.Schema({

    title: { type: String, require: true},
    issuer: { type: String, required: true},

    user_id: {type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
    }

}, {
    versionkey: false,
    timestamps: true
})



module.exports = mongoose.model("checkout", checkoutSchema);
