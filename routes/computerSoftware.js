import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { createComputerSoftware, getComputerSoftwaresByPersonalComputerId } from "../controllers/computerSoftware.js";
import { createComputerSoftwareRule } from "../validations/computerSoftware.js";

const computerSoftwareRouter = Router();

computerSoftwareRouter.get("/personalComputerId/:personalComputerId", [authVerify, getComputerSoftwaresByPersonalComputerId]);
computerSoftwareRouter.post("/", [authVerify, createComputerSoftwareRule, createComputerSoftware]);

export default computerSoftwareRouter;