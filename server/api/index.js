// apiRoutes/index.js
const router = require('express').Router();

router.use('/auth', require('./auth')); // matches all requests to /api/auth/
router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/questions', require('./questions')); // matches all requests to  /api/quesions/

// handles requests to routes that do not exist
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});


module.exports = router;
