const mongoose = require(`mongoose`)

const sectionSchema = new mongoose.Schema({
  
    sec_name: {
        type: String,
        require: true
    }
}, {
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("section", sectionSchema);