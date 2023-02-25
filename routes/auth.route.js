const { Router } = require('express');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

const router = Router();

router.post(
  '/signup',
  [check('email', 'Invalid email').isEmail(), check('password', 'Invalid password').isLength({ min: 6 })],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;
      const isUsed = await User.findOne({ email });

      if (isUsed) {
        return res.status(300).json({ message: 'Email is already used, try another' });
      }

      const user = new User({ email, password });

      await user.save();

      res.status(201).json({ message: 'User created' });
    } catch (error) {
      console.log(error);
    }
  },
);

module.exports = router;
