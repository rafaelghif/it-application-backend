import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { getPhysicalMemoryByPersonalComputerRule } from "../validations/physicalMemory.js";
import { getPhysicalMemoryByPersonalComputer } from "../controllers/physicalMemory.js";

const physicalMemoryRouter = Router();

physicalMemoryRouter.get("/personalComputerId/:personalComputerId", [authVerify, getPhysicalMemoryByPersonalComputerRule, getPhysicalMemoryByPersonalComputer]);

export default physicalMemoryRouter;
