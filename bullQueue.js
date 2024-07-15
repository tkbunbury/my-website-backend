const Queue = require('bull');
const { sendEmail } = require('./model');
require('dotenv').config();

const emailQueue = new Queue('emailQueue', {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  },
});

emailQueue.process(async (job) => {
  const { emailMessage, pageTitle } = job.data;
  return await sendEmail(emailMessage, pageTitle);
});

emailQueue.on('completed', (job, result) => {
  console.log(`Job completed with result: ${result}`);
});

emailQueue.on('failed', (job, err) => {
  console.log(`Job failed with error: ${err}`);
});

module.exports = emailQueue;
