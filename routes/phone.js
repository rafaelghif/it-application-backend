import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { createPhone, getActivePhones, getPhones, updatePhone } from "../controllers/phone.js";
import { createPhoneRule, updatePhoneRule } from "../validations/phone.js";

const phoneRouter = Router();

phoneRouter.get("/", [authVerify, getPhones]);
phoneRouter.get("/active", [authVerify, getActivePhones]);
phoneRouter.post("/", [authVerify, createPhoneRule, createPhone]);
phoneRouter.patch("/", [authVerify, updatePhoneRule, updatePhone]);

export default phoneRouter;