const getUserName = (req, res) => {
  const userName = req.decoded.username;
  // eslint-disable-next-line camelcase
  const { user_id } = req.decoded;
  // eslint-disable-next-line camelcase
  res.json({ username: userName, userId: user_id });
};

module.exports = getUserName;
