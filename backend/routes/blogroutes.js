import express from "express";
const router = express.Router();

import {
    getBlogPosts,
    getAllBlogPosts
} from "../models/blogmodels.js";

router.get("/", async (req, res) => {
    const allBlogPosts = await getAllBlogPosts();
    return res.json({ success: true, payload: allBlogPosts });
})

router.get("/:email", async (req, res) => {
    const allBlogPosts = await getBlogPosts(req.params.email);
    return res.json({ success: true, payload: allBlogPosts });
})

export default router;


