import express from "express";
import { getCommentList} from "../repository/commentRepository.js";

const router= express.Router();

router.get("/", async(req,res)=>{
    res.json(await getCommentList())
});

export default router;
