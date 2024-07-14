const nodemailer = require('nodemailer');
require('dotenv').config();



sendEmail = async (emailMessage, pageTitle) => {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        })

        const mailOptions = {
            from: process.env.EMAIL_USER ,
            to: process.env.EMAIL_RECIPIENT ,
            subject: `New message from ${pageTitle} page on website` ,
            text: emailMessage 
        }

        const emailBody = await transporter.sendMail(mailOptions)
        return emailBody
}


module.exports = { sendEmail }