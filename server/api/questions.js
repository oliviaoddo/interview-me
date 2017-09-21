const router = require('express').Router();
const Question = require('../../db/models/Question');

// matches GET requests to /api/questions/
router.get('/', function (req, res, next) {
  Question.find({}, (err, questions) => {
    if (err) res.status(500).send(err.message);
    else res.json(questions);
  });
});

// matches POST requests to /api/questions/
router.post('/', function (req, res, next) {
  Question.create(req.body, (err, question) => {
    if (err) res.status(500).send(err.message);
    else res.json(question);
  });
});

// matches PUT requests to /api/question/:questionId
router.put('/:questionId', function (req, res, next) {
  Question.findByIdAndUpdate(req.params.questionId, req.body, {new: true}, (err, question) => {
    if (err) res.status(500).send(err.message);
    else res.json(question);
  });
});

// matches DELTE requests to /api/questions/:questionId
router.delete('/:questionId', function (req, res, next) {
  Question.findByIdAndRemove(req.params.questionId, (err, docs) => {
    if (err) res.status(500).send(err.message);
    else res.json(docs);
  });
});

module.exports = router;
