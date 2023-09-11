import { body, param } from "express-validator";

export const getSubCategoriesByCategoryIdRule = [
    param("categoryId").notEmpty().withMessage("Category Id cannot be null")
        .isUUID("4").withMessage("Invalid id type")
];

export const createSubCategoryRule = [
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("CategoryId").notEmpty().withMessage("Category Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
];

export const updateSubCategoryRule = [
    body("id").notEmpty().withMessage("Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("inActive").notEmpty().withMessage("InActive cannot be null")
        .isBoolean().withMessage("Invalid inActive type"),
    body("CategoryId").notEmpty().withMessage("Category Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
];