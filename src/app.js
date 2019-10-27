const express = require('express');
const fs = require('fs')

const app = express();

app.use('*/css', express.static(path.join(__dirname, '/build/static/css')))

app.get('/', async function (req, res, next) {
  try {
    res.sendfile('./build/index.html')
  }
  catch(err) {
    return next(err);
  }
});

app.use(function (req, res, next) {
  const err = new ExpressError('resource not found', 404);
  return next(err);
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  if (process.env.NODE_ENV != "test") {
    console.error(err.stack);
  }

  return res.json({
    error: err,
    message: err.message
  });
});

module.exports = app;