import { body } from "express-validator";

export const authenticationRule = [
    body("badgeId").notEmpty().withMessage("BadgeId cannot be null"),
    body("password").notEmpty().withMessage("Password cannot be null")
]