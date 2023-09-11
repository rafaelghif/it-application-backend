import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { getDiskDriveByPersonalComputerRule } from "../validations/diskDrive.js";
import { getDiskDriveByPersonalComputer } from "../controllers/diskDrive.js";

const diskDriveRouter = Router();

diskDriveRouter.get("/personalComputerId/:personalComputerId", [authVerify, getDiskDriveByPersonalComputerRule, getDiskDriveByPersonalComputer]);

export default diskDriveRouter;