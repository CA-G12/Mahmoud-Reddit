const getUserName = (req, res) => {
  const userName = req.decoded.username;
  res.json({ username: userName });
};

module.exports = getUserName;
