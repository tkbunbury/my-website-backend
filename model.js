const nodemailer = require('nodemailer');
require('dotenv').config();



sendEmail = async (emailMessage) => {

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
            from: 'tkbunbury@gmail.com' ,
            to: 'tkbunbury98@gmail.com' ,
            subject: 'New message from website' ,
            text: emailMessage 
        }

        const emailBody = await transporter.sendMail(mailOptions)
        return emailBody
}


module.exports = { sendEmail }