import Posts from "../models/postModel.js";

const getPostList = async () => {
  try {
    return await Posts.findAll();
  } catch (error) {
    console.log(error);
  }
};

const getPostById = async (pPostId) => {
  try {
    return await Posts.findByPk(pPostId);
  } catch (error) {
    console.log(error);
  }
};

const addPost = async (pPost) => {
  try {
    return await Posts.create(pPost);
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (pPostId, pPost) => {
  try {
    const post = await Posts.findByPk(pPostId);
    post.set({
      title: pPost.title,
      content: pPost.content,
    });
    return await post.save();
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (pPostId) => {
  try {
    await Posts.destroy({ where: { id: pPostId } });
  } catch (error) {
    console.log(error);
  }
};

const getPostByUserId = async (pUserId) => {
  try {
    return await Posts.findAll({ where: { UserId: pUserId } });
  } catch (error) {
    console.log(error);
  }
};

export {
  getPostList,
  getPostById,
  addPost,
  deletePost,
  updatePost,
  getPostByUserId,
};
