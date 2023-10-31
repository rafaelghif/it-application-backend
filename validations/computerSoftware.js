import { body, param } from "express-validator";

export const getComputerSoftwaresByPersonalComputerIdRule = [
	param("personalComputerId").notEmpty().withMessage("Personal computer id cannot be null")
		.isUUID("4").withMessage("Invalid id type")
];

export const createComputerSoftwareRule = [
	body("PersonalComputerId").notEmpty().withMessage("Personal Computer Id cannot be null")
		.isUUID("4").withMessage("Invalid id type"),
	body("SoftwareId").notEmpty().withMessage("Software Id id cannot be null")
		.isUUID("4").withMessage("Invalid id type")
];