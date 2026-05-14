const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || 'ropero_app';

let clientPromise;

async function connectDB() {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable');
  }

  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  const client = await clientPromise;
  const db = client.db(dbName);

  await Promise.all([
    db.collection('users').createIndex({ email: 1 }, { unique: true }),
    db.collection('clothes').createIndex({ userId: 1, createdAt: -1 })
  ]);

  return db;
}

module.exports = { connectDB };
