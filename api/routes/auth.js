const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt"); //it hashes my password to make it more safety

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //Parsing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    // //Comparing userPasword with hashedPassword
    const validated = await bcrypt.compare(req.body.password, user.password);

    if (!user) res.status(400).json("Wrong credentials!");
    else if (!validated) res.status(400).json("Wrong credentials!");
    else {
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
