const mongoose = require(`mongoose`)

const userSchema = new mongoose.Schema({

    user_name: {
        type: String,
        require : true,
    },
   
    email: {
        type: String,
        required: true,
        unique: true
    },
   
    age: {
        type: Number,
        required: true
    },

}, {
    versionKey: false,
    timestamps:true
})



module.exports = mongoose.model("user", userSchema);
