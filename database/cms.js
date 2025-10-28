require('dotenv').config();
const mongoose = require('mongoose');

const cmsURI = process.env.DB_USER;

const cmsConnection = mongoose.createConnection(cmsURI);

cmsConnection.on('connected', () => {
  console.log('✅ MongoDB cms DB connected successfully');
});

cmsConnection.on('error', (err) => {
  console.error('❌ MongoDB cms DB connection error:', err);
});

cmsConnection.on('disconnected', () => {
  console.log('⚠️ MongoDB cms DB disconnected');
});

module.exports = cmsConnection;
