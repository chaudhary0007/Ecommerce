import User from "../schema/User";

const addUser = async (req, res) => {
  let data = req.body;

  let user = await User.create(data);

  res.status(200).json(user);
};

export default addUser;
