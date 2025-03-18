import express from "express";
import {
  applyForInternship,
  createInternship,
  deleteInternship,
  getAllInternships,
  getInternshipsByCategory,
  singleInternship,
  updateInternship,
} from "../Controllers/InternshipControllers.js";

const router = express.Router();

router.post("/add/internship", createInternship);
router.get("/all/internship", getAllInternships);
router.get("/internship/:id", singleInternship);
router.get("/internships/category/:category", getInternshipsByCategory);
router.put("/internships/:id", updateInternship);
router.delete("/internships/:id", deleteInternship);
router.post("/internships/:id/apply", applyForInternship);

export default router;
