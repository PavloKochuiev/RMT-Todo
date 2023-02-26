const { Router } = require('express');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = Router();

router.post(
  '/signup',
  [check('email', 'Invalid email').isEmail(), check('password', 'Invalid password').isLength({ min: 6 })],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), message: 'Invalid data' });
      }

      const { email, password } = req.body;
      const isUsed = await User.findOne({ email });

      if (isUsed) {
        return res.status(300).json({ message: 'Oh no, this email address is unavailable!' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      const jwtSecret = 'weiwqeufjdkkwad33948awdkadkawkd9219t23iffkrovk';
      const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

      res.json({ token, userId: user.id });
    } catch (error) {
      console.log(error);
    }
  },
);

router.post(
  '/login',
  [check('email', 'Invalid email').isEmail(), check('password', 'Invalid password!').exists()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array(), message: 'Invalid data!' });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'User not found!' });
      }

      const isMatch = bcrypt.compare(user.password, password);

      if (isMatch) {
        return res.status(400).json({ message: 'Incorrect password!' });
      }

      const jwtSecret = 'weiwqeufjdkkwad33948awdkadkawkd9219t23iffkrovk';
      const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

      res.json({ token, userId: user.id });
    } catch (error) {
      console.log(error);
    }
  },
);

module.exports = router;
