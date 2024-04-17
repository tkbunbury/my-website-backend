const {
    sendEmail,

} = require(`${__dirname}/model.js`)



async function sendMessage (req, res, next) {
    try{
        // Extract data from request body
        const { name, email, phoneNumber, message } = req.body

        let emailMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}` 

        if (phoneNumber) {
            emailMessage += `\nPhone Number: ${phoneNumber}`
        }

        //Call the model function to send the email
        const sentEmail = await sendEmail(emailMessage);

        // Send response
        res.status(200).send({ sentEmail })
    }
    catch (err) {
        next(err)
    }
}

module.exports = { sendMessage };