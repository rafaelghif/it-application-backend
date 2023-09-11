import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { createPersonalComputer, getPersonalComputers, updatePersonalComputer } from "../controllers/personalComputer.js";
import { createPersonalComputerRule, updatePersonalComputerRule } from "../validations/personalComputer.js";

const personalComputerRouter = Router();

personalComputerRouter.get("/", [authVerify, getPersonalComputers]);
personalComputerRouter.post("/", [authVerify, createPersonalComputerRule, createPersonalComputer]);
personalComputerRouter.patch("/", [authVerify, updatePersonalComputerRule, updatePersonalComputer]);

export default personalComputerRouter;