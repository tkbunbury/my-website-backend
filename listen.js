const app = require('./app.js');
const { PORT = 9090 } = process.env;

const server = app.listen(PORT, () => { 
    console.log(`Listening on ${PORT}...`);
});

module.exports = server;