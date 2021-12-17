const nodemailer = require(`nodemailer`)

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, 
    auth: {
        user: "b15f38ad548dd3",
        pass: "1c6aeec45b1d57",
    },
});
