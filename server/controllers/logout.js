const logout = (req, res) => {
  res.clearCookie('token').status(200).send({ msg: 'logged out successfully' });
};

module.exports = logout;
