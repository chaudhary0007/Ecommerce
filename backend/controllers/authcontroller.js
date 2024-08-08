import User from "../schema/User.js";
import { hashpassword } from "../helpers/authHelper.js";

export const registerController = async (req, res) => {
  try {
    const { FirstName, LastName, email, password } = req.body;
    if (!FirstName) {
      return res.send({ error: "Name is Required" });
    }
    if (!LastName) {
      return res.send({ error: "Last Name is Required" });
    }
    if (!email) {
      return res.send({ error: "email is Required" });
    }
    if (!password) {
      return res.send({ error: "password is Required" });
    }
    const exisitingUser = await User.findOne({ email });
    if (exisitingUser) {
      return res.status(200).send({
        success: true,
        message: "already Register please login",
      });
    }
    const hashedPassword = await hashpassword(password);
    const user = await new User({
      FirstName,
      LastName,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};
