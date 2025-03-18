import express from "express";
import { loginUser, newUser } from "../Controllers/UserControllers.js";

const router = express.Router();

router.post("/create/user", newUser);
router.post("/login/user", loginUser);

export default router;
