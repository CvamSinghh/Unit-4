const mongoose = require(`mongoose`)




module.exports = () => {
    mongoose.connect(`mongodb://localhost:27017/book_library`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};


