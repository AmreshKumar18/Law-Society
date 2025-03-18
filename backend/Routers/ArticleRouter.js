import express from "express";
import {
  addArticle,
  deleteArticle,
  getAllArticles,
  getSingleArticles,
  updateArticle,
} from "../Controllers/ArticleController.js";
import { uploadFiles } from "../Middlewares/Multer.js";

const router = express.Router();

router.post("/new/article", uploadFiles, addArticle);
router.get("/all/articles", getAllArticles);
router.get("/articles/:id", getSingleArticles);
router.put("/articles/:id", updateArticle);
router.delete("/articles/:id", deleteArticle);

export default router;
