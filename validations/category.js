import { body } from "express-validator";

export const createCategoryRule = [
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim()
];

export const updateCategoryRule = [
    body("id").notEmpty().withMessage("Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("inActive").notEmpty().withMessage("InActive cannot be null")
        .isBoolean().withMessage("Invalid inActive type")
];
