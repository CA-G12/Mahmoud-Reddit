const { addPostQuery } = require('../database/queries');

const addPost = (req, res) => {
  const { content, image } = req.body;
  const createdBy = req.decoded.user_id;
  addPostQuery(content, image, createdBy)
    .then(() => res.json({ msg: 'add post successfully' }))
    .catch((err) => ({ error: err }));
};
module.exports = addPost;
