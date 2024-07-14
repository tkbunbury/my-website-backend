const {
    sendEmail,

} = require(`${__dirname}/model.js`)



async function sendMessage (req, res, next) {
    try{
        // Extract data from request body
        const { name, email, message, subject, phoneNumber, pageTitle } = req.body

        let emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}` 

        if (phoneNumber) {
            const { phoneNumber } = req.body;
            emailContent += `\nPhone Number: ${phoneNumber}`
        }
        else if (subject) {
            const { subject } = req.body;
            emailContent += `\nSubject: ${subject}`
        }

        // Call the model function to send the email
        const sentEmail = await sendEmail(emailContent, pageTitle);

        // Send response
        res.status(200).send({ sentEmail })
    }
    catch (err) {
        next(err)
    }
}

module.exports = { sendMessage };