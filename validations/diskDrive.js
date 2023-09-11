import { param } from "express-validator";

export const getDiskDriveByPersonalComputerRule = [
    param("personalComputerId").notEmpty().withMessage("Personal computer id cannot be null")
        .isUUID("4").withMessage("Invalid id type")
];