import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  FirstName:String,
  LastName: String,
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  role: {type : Number, default : 0 }
},{timestamps:true}
);

const User = mongoose.model("User", userSchema);

export default User;
