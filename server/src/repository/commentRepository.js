import Comment from "../models/commentModel.js";

const getCommentList = async () => {
  try {
    return await Comment.findAll();
  } catch (error) {
    console.log(error);
  }
};

export { getCommentList };
