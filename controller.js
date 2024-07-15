const emailQueue = require('./bullQueue');


// const {
//     sendEmail,

// } = require(`${__dirname}/model.js`)



async function sendMessage (req, res, next) {
    try{
        // Extract data from request body
        const { name, email, message, subject, phoneNumber, pageTitle } = req.body

        let emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}` 

        if (phoneNumber) {
            // const { phoneNumber } = req.body;
            emailContent += `\nPhone Number: ${phoneNumber}`
        }
        if (subject) {
            // const { subject } = req.body;
            emailContent += `\nSubject: ${subject}`
        }

        // Add email job to the queue
        await emailQueue.add({ emailMessage: emailContent, pageTitle });

        // Call the model function to send the email
        // const sentEmail = await sendEmail(emailContent, pageTitle);

        // Send response
        // res.status(200).send({ sentEmail })

        res.status(200).send({ msg: 'Message sent successfully!' });
    }
    catch (err) {
        next(err)
    }
}

module.exports = { sendMessage };