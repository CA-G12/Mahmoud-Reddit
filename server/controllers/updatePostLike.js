const addPostLikeQuery = require('../database/queries/addPostLikeQuery');
const removePostLikeQuery = require('../database/queries/removePostLikeQuery');

const updatePostLike = (req, res) => {
  const {
    userId, postId, status, likeId,
  } = req.body;
  if (status === 'add') {
    addPostLikeQuery({ userId, postId })
      .then(() => res.json({ msg: 'add like successfully' }))
      .catch((err) => ({ error: err }));
  } else {
    removePostLikeQuery({ likeId })
      .then(() => {
        res.json({ msg: 'remove like successfully' });
      })
      .catch((err) => ({ error: err }));
  }
  // addPostQuery(content, image, createdBy, timestapm)
  //   .then(() => res.json({ msg: 'add post successfully' }))
  //   .catch((err) => ({ error: err }));
};
module.exports = updatePostLike;
