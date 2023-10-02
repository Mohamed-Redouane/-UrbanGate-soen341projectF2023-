import mongoose from "mongoose";


let db = null;

async function connectDB(dbhost,dbName) {
  if (!db) {
        try {
            const connection = await mongoose.connect(`mongodb+srv://Cluster96567:SOEN341@cluster96567.wpnpdsc.mongodb.net/`);
            db = connection;
        } catch (err) {
            console.error('Failed to connect to MongoDB', err);
            process.exit(1);
        }
    }
    return db;
};

export default connectDB;