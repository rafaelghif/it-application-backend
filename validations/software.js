import { body } from "express-validator";

export const createSoftwareRule = [
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("version").notEmpty().withMessage("Version cannot be null"),
    body("licenseType").notEmpty().withMessage("License type cannot be null"),
    body("startDate").notEmpty().withMessage("Start date cannot be null"),
];

export const updateSoftwareRule = [
    body("id").notEmpty().withMessage("Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("name").notEmpty().withMessage("Name cannot be null"),
    body("version").notEmpty().withMessage("Version cannot be null"),
    body("licenseType").notEmpty().withMessage("License type cannot be null"),
    body("startDate").notEmpty().withMessage("Start date cannot be null"),
    body("inActive").notEmpty().withMessage("InActive cannot be null")
        .isBoolean().withMessage("Invalid inActive type")
];