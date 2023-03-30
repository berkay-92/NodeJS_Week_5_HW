import express from "express";
import {
  getPostList,
  getPostById,
  addPost,
  deletePost,
  updatePost,
  getPostByUserId,
} from "../repository/postsRepository.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const { UserId } = req.query;
  if (UserId) {
    return res.json(await getPostByUserId(UserId));
  }
  return res.json(await getPostList());
});

router.get("/:id", async (req, res) => {
  res.json(await getPostById(req.params.id));
});

router.post("/", async (req, res) => {
  await addPost(req.body);
  res.send(req.body);
});

router.put("/:id", async (req, res) => {
  await updatePost(req.params.id, req.body);
  res.send(req.body);
}); 

router.delete("/:id", async (req, res) => {
  await deletePost(req.params.id);
  res.send("Post is deleted!");
});

export default router;
