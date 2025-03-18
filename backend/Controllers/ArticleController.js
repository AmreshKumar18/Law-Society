import { Articles } from "../Models/ArticlesModel.js";

export const addArticle = async (req, res) => {
  try {
    const { title, category, description, writtenBy } = req.body;
    const image = req.file;
    const newArticle = new Articles({
      title,
      category,
      image: image?.path,
      description,
      writtenBy,
    });
    const savedArticle = await newArticle.save();
    res.status(200).json({ message: "New Article Added", savedArticle });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "error while adding new article",
        error: error.message,
      });
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const articles = await Articles.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getSingleArticles = async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.status(200).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Articles.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedArticle) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.status(200).json(updatedArticle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Articles.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
