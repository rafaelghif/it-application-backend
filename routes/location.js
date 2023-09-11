import { Router } from "express";
import { authVerify } from "../middlewares/auth.js";
import { createLocationRule, getLocationByDepartmentRule, updateLocationRule } from "../validations/location.js";
import { createLocation, getActiveLocationByDepartment, getLocationByDepartment, updateLocation } from "../controllers/location.js";

const locationRouter = Router();

locationRouter.get("/departmentId/:departmentId", [authVerify, getLocationByDepartmentRule, getLocationByDepartment]);
locationRouter.get("/active/departmentId/:departmentId", [authVerify, getLocationByDepartmentRule, getActiveLocationByDepartment]);
locationRouter.get("/active", [authVerify, getLocationByDepartmentRule, getLocationByDepartment]);
locationRouter.post("/", [authVerify, createLocationRule, createLocation]);
locationRouter.patch("/", [authVerify, updateLocationRule, updateLocation]);

export default locationRouter;