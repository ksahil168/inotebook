const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//create a user using: Post "localhost:5000/api/auth/createuser".
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "enter valid email").isEmail(),
    body("password", "password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //if their are errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check wether email with this user already exist
    let user = await User.findOne({ email: req.body.email });
    try {
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exist" });
      }
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      /*  .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({
          error: "please enter a unique email",
          message: err.message,
        });
      }); */
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error ocurred");
    }
  }
);

module.exports = router;
