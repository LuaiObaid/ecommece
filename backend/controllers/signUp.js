const registerUser = require("../models/signUp");
const generateToken = require("../generateToken");

const registration = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400).send("Please enter all fields.");
    return;
  }

  const userExists = await registerUser.findOne({ email });
  if (userExists) {
    res.status(400).send("User already exists.");
    return;
  }

  try {
    const user = await registerUser.create({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(400).send("Failed to create user.");
  }
};
  const authUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await registerUser.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("failed to login user");
  }
};

module.exports = {registration, authUser};

