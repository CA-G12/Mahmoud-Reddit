const addPostQuery = require('../database/queries/addPostQuery');

const addPost = (req, res) => {
  const { content, image, timestapm } = req.body;
  const createdBy = req.decoded.user_id;
  addPostQuery(content, image, createdBy, timestapm)
    .then(() => res.json({ msg: 'add post successfully' }))
    .catch((err) => ({ error: err }));
};
module.exports = addPost;
