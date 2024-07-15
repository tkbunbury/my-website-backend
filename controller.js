const emailQueue = require('./bullQueue');


async function sendMessage (req, res, next) {
    try{
        // Extract data from request body
        const { name, email, message, subject, phoneNumber, pageTitle } = req.body

        let emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}` 

        if (phoneNumber) {
            emailContent += `\nPhone Number: ${phoneNumber}`
        }
        if (subject) {
            emailContent += `\nSubject: ${subject}`
        }

        // Add email job to the queue
        await emailQueue.add({ emailMessage: emailContent, pageTitle });


        res.status(200).send({ msg: 'Message sent successfully!' });
    }
    catch (err) {
        next(err)
    }
}

module.exports = { sendMessage };