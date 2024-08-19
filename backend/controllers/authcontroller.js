import User from "../schema/User.js";
import { comparePassword, hashpassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { FirstName, LastName, email, password } = req.body
    if (!FirstName) {
      return res.send({ error: "First Name is Required" });
    }
    if (!LastName) {
      return res.send({ error: " Last Name is Required" });
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
//Post login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: 'Invalid email or password'
      })
    }
    //check user
    const user = await User.findOne({email});
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email is not Registered'
      })
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: False,
        message: 'Invalid Password'
      })
    }
    //token
    const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
      expiresIn : '7d'
    });
    res.status(200).send({
      success: true,
      message: 'login successfully',
      user: {
        FirstName: user.FirstName,
        LastName: user.LastName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};
//test controller
export const testController = (req,res)=>{
  res.send("protected Route");
}
