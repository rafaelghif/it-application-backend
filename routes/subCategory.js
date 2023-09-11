import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { createSubCategoryRule, getSubCategoriesByCategoryIdRule, updateSubCategoryRule } from "../validations/subCategory.js";
import { createSubCategory, getActiveSubCategoriesByCategoryId, getSubCategoriesByCategoryId, updateSubCategory } from "../controllers/subCategory.js";

const subCategoryRouter = Router();

subCategoryRouter.get("/categoryId/:categoryId", [authVerify, getSubCategoriesByCategoryIdRule, getSubCategoriesByCategoryId]);
subCategoryRouter.get("/active/categoryId/:categoryId", [authVerify, getSubCategoriesByCategoryIdRule, getActiveSubCategoriesByCategoryId]);
subCategoryRouter.post("/", [authVerify, createSubCategoryRule, createSubCategory]);
subCategoryRouter.patch("/", [authVerify, updateSubCategoryRule, updateSubCategory]);

export default subCategoryRouter;