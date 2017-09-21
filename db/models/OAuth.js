'use strict';

const mongoose = require('mongoose');

const oauthSchema = new mongoose.Schema({
  title: String,
  answer: String,
  hints: Array,
  type: String
});

const OAuth = mongoose.model('OAuth', oauthSchema);

module.exports = OAuth;
