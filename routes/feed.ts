import express from "express";
import * as feedController from "../controllers/feed";

const router: express.Router = express.Router();

router.get("/posts", feedController.getPosts);

router.post("/posts", feedController.createPost);

export default router;
