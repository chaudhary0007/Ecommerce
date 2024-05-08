import mongoose from "mongoose";

async function connectdb() {
  const connectionString = process.env.MONGO_URL;
  await mongoose.connect(connectionString);
}

export default connectdb;
