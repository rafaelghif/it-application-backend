import { body } from "express-validator";

export const createPhoneRule = [
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("DepartmentId").notEmpty().withMessage("Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
];

export const updatePhoneRule = [
    body("id").notEmpty().withMessage("Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("inActive").notEmpty().withMessage("InActive cannot be null")
        .isBoolean().withMessage("Invalid inActive type"),
    body("DepartmentId").notEmpty().withMessage("DepartmentId cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
];