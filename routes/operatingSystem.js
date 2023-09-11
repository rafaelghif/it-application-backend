import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { getOperatingSystemByPersonalComputerRule } from "../validations/operatingSystem.js";
import { getOperatingSystemByPersonalComputer } from "../controllers/operatingSystem.js";

const operatingSystemRouter = Router();

operatingSystemRouter.get("/personalComputerId/:personalComputerId", [authVerify, getOperatingSystemByPersonalComputerRule, getOperatingSystemByPersonalComputer]);

export default operatingSystemRouter;