'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/interview-me', (err) => {
  if (err) console.log('Failed to connect to mongodb', err);
  else console.log('Successfully connected to mongodb');
});

