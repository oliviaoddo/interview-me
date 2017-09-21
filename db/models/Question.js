'use strict';

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: String,
  answer: String,
  hints: Array,
  type: String
});

const model = mongoose.model('Question', questionSchema);

module.exports = model;
