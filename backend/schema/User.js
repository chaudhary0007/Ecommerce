import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  FirstName:String,
  LastName: String,
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

export default User;
