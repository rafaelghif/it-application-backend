import { body, param } from "express-validator";

export const getLocationByDepartmentRule = [
    param("departmentId").notEmpty().withMessage("DepartmentId cannot be null")
        .isUUID("4").withMessage("Invalid id type")
];

export const createLocationRule = [
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("lot").notEmpty().withMessage("Lot cannot be null")
        .trim(),
    body("DepartmentId").notEmpty().withMessage("Department Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
];

export const updateLocationRule = [
    body("id").notEmpty().withMessage("Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("name").notEmpty().withMessage("Name cannot be null")
        .trim(),
    body("lot").notEmpty().withMessage("Lot cannot be null")
        .trim(),
    body("inActive").notEmpty().withMessage("InActive cannot be null")
        .isBoolean().withMessage("Invalid inActive type"),
];