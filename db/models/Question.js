'use strict';

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: String,
  answer: String,
  hints: Array,
  type: String
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
