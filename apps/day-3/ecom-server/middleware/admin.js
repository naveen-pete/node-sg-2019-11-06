const admin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'You are not authorized to perform this operation.' });
  }
  next();
};

module.exports = admin;