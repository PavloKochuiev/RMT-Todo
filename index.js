const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

async function start() {
  try {
    mongoose.connect(
      'mongodb+srv://admin:admin@mern-todo.hml06ub.mongodb.net/?retryWrites=true&w=majority',
    );

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

start();
