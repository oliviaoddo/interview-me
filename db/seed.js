'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/interview-me', (err) => {
  if (err) console.log('Failed to connect to mongodb', err);
  else console.log('Successfully connected to mongodb');
});


const Question = require('./models/Question');

Question.remove({}, (err) => {
  if (err) console.log(err);
});

const questions = [{title: 'Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structure?', answer: 'coming soon', hints: [44, 117, 132], type: 'Arrays and Strings'}, {title: 'Given two strings, write a method to decide if one is a permutation of the other.', answer: 'coming soon', hints: [84, 122, 131], type: 'Arrays and Strings'}];

Question.collection.insert(questions, (err, docs) => {
  if (err) console.log('questions could not be instered');
  else console.log(`${docs.ops.length} questions were added`);
});
