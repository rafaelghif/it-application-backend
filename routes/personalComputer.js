import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { createPersonalComputer, getPersonalComputers, getUnspecificPersonalComputers, updatePersonalComputer, updatePersonalComputerCategory } from "../controllers/personalComputer.js";
import { createPersonalComputerRule, getPersonalComputersRule, updatePersonalComputerCategoryRule, updatePersonalComputerRule } from "../validations/personalComputer.js";

const personalComputerRouter = Router();

personalComputerRouter.get("/category/:category", [authVerify, getPersonalComputersRule, getPersonalComputers]);
personalComputerRouter.get("/unspecific", [authVerify, getUnspecificPersonalComputers]);
personalComputerRouter.post("/", [authVerify, createPersonalComputerRule, createPersonalComputer]);
personalComputerRouter.patch("/", [authVerify, updatePersonalComputerRule, updatePersonalComputer]);
personalComputerRouter.patch("/category", [authVerify, updatePersonalComputerCategoryRule, updatePersonalComputerCategory]);

export default personalComputerRouter;