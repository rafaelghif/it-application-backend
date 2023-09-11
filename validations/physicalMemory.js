import { param } from "express-validator";

export const getPhysicalMemoryByPersonalComputerRule = [
    param("personalComputerId").notEmpty().withMessage("Personal computer id cannot be null")
        .isUUID("4").withMessage("Invalid id type")
];