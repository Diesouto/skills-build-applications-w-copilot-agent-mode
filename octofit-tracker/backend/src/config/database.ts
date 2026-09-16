import mongoose from 'mongoose';

export const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const db = mongoose.connection;

export async function connectDatabase(): Promise<void> {
  if (db.readyState === 1) {
    return;
  }

  await mongoose.connect(connectionString);
  console.log('Connected to octofit_db');
}

db.on('error', console.error.bind(console, 'connection error:'));

export default db;
