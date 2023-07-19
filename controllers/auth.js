const bcrypt = require('bcrypt');
const User = require('../model/User');

const register = async (req, res) => {
  try {
    // Extract the data from the request body
    const { name, age, email, username, password, image } = req.body;

    // Check if the email or username is already registered
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: 'Email or username already registered' });
    }

    // Hash the password
    const saltRounds = 10; // Number of salt rounds
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new User({
      name,
      age,
      email,
      username,
      password: hashedPassword,
      image
    });

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    res
      .status(201)
      .json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        error: 'An error occurred while registering the user',
        msg: error.message
      });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by email or username
    const user = await User.findOne({username:username});

    if (!user) {
      return res.status(400).json({ error: 'User does not exist.' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Return a success response
    res.status(200).json({ message: 'User logged in successfully', user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: 'An error occurred during login', msg: error.message });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ message: 'there are all users', users });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred during login', msg: error.message });
  }
};
module.exports = { register, login, getUsers };
