
const log = (req, res, next) => {
  console.log(`Request received: Url: ${req.url}, Method: ${req.method}`);
  next();
};

module.exports = log;
