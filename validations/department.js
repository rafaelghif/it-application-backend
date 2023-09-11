import { body } from "express-validator";

export const createDepartmentRule = [
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("abbreviation").notEmpty().withMessage("Abbreviation cannot be null")
        .trim()
];

export const updateDepartmentRule = [
    body("id").notEmpty().withMessage("Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("abbreviation").notEmpty().withMessage("Abbreviation cannot be null")
        .trim(),
    body("inActive").notEmpty().withMessage("InActive cannot be null")
        .isBoolean().withMessage("Invalid inActive type")
];