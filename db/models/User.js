'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: String,
  answer: String,
  hints: Array,
  type: String
});

const User = mongoose.model('Question', userSchema);

module.exports = User;
