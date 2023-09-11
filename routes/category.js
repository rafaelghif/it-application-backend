import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { createCategory, getActiveCategories, getCategories, updateCategory } from "../controllers/category.js";
import { createCategoryRule, updateCategoryRule } from "../validations/category.js";

const categoryRouter = Router();

categoryRouter.get("/", [authVerify, getCategories]);
categoryRouter.get("/active", [authVerify, getActiveCategories]);
categoryRouter.post("/", [authVerify, createCategoryRule, createCategory]);
categoryRouter.patch("/", [authVerify, updateCategoryRule, updateCategory]);

export default categoryRouter;