import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { getNetworkAdapterByPersonalComputerRule } from "../validations/networkAdapter.js";
import { getNetworkAdapterByPersonalComputer } from "../controllers/networkAdapter.js";

const networkAdapterRouter = Router();

networkAdapterRouter.get("/personalComputerId/:personalComputerId", [authVerify, getNetworkAdapterByPersonalComputerRule, getNetworkAdapterByPersonalComputer]);

export default networkAdapterRouter;