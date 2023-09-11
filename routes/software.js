import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { createSoftware, getSoftwares, updateSoftware } from "../controllers/software.js";
import { createSoftwareRule, updateSoftwareRule } from "../validations/software.js";

const softwareRouter = Router();

softwareRouter.get("/", [authVerify, getSoftwares]);
softwareRouter.post("/", [authVerify, createSoftwareRule, createSoftware]);
softwareRouter.patch("/", [authVerify, updateSoftwareRule, updateSoftware]);

export default softwareRouter;