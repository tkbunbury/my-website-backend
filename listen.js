const app = require('./app.js');
const { PORT = 9090, HOST = '0.0.0.0' } = process.env;

const server = app.listen(PORT, HOST, () => { 
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

module.exports = server;