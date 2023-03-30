import express from "express";
import {getUserList,addUser,deleteUser}from "../repository/userRepository.js";

const router= express.Router();

router.get("/", async(req,res)=>{
    res.json(await getUserList())
});


router.post("/", async (req,res)=>{
    await addUser(req.body)
    res.send(req.body)
});


router.delete("/:id", async (req, res) => {
  await deleteUser(req.params.id);
  res.send("User is deleted!");
});

export default router;