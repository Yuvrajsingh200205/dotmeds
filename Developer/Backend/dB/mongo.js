// mongo.js

const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Database';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log('Connected to MongoDB server');

    // Access a database
    const db = client.db(dbName);

    return db;

  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}

async function closeMongoConnection() {
  try {
    // Close the connection
    await client.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

module.exports = { connectToMongo, closeMongoConnection };
