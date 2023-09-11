import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";

export const getLocationByDepartment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                isExpressValidation: true,
                data: {
                    title: "Validation Errors!",
                    message: "Validation Error!",
                    validationError: errors.array()
                }
            });
        }

        const { departmentId } = req.params;

        const response = await models.Location.findAll({
            order: [["name", "ASC"]],
            where: {
                DepartmentId: departmentId
            }
        });

        return res.status(200).json({
            message: "Success Fetch Locations!",
            data: response
        });
    } catch (err) {
        errorLogging(err.toString());
        return res.status(401).json({
            isExpressValidation: false,
            data: {
                title: "Something Wrong!",
                message: err.toString()
            }
        });
    }
}

export const getActiveLocationByDepartment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                isExpressValidation: true,
                data: {
                    title: "Validation Errors!",
                    message: "Validation Error!",
                    validationError: errors.array()
                }
            });
        }

        const { departmentId } = req.params;

        const response = await models.Location.findAll({
            order: [["name", "ASC"]],
            where: {
                DepartmentId: departmentId,
                inActive: false
            }
        });

        return res.status(200).json({
            message: "Success Fetch Locations!",
            data: response
        });
    } catch (err) {
        errorLogging(err.toString());
        return res.status(401).json({
            isExpressValidation: false,
            data: {
                title: "Something Wrong!",
                message: err.toString()
            }
        });
    }
}

export const getActiveLocation = async (req, res) => {
    try {
        const { search } = req.query;
        const response = await models.Location.findAll({
            order: [["name", "ASC"]],
        });

        return res.status(200).json({
            message: "Success Fetch Active Locations!",
            data: response
        });
    } catch (err) {
        errorLogging(err.toString());
        return res.status(401).json({
            isExpressValidation: false,
            data: {
                title: "Something Wrong!",
                message: err.toString()
            }
        });
    }
}

export const createLocation = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                isExpressValidation: true,
                data: {
                    title: "Validation Errors!",
                    message: "Validation Error!",
                    validationError: errors.array()
                }
            });
        }

        const { name, lot, DepartmentId } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.Location.create({
            name,
            lot,
            DepartmentId,
            createdBy: badgeId,
            updatedBy: badgeId
        });

        return res.status(200).json({
            message: `Success Create Location!`,
            data: response
        });
    } catch (err) {
        errorLogging(err.toString());
        return res.status(401).json({
            isExpressValidation: false,
            data: {
                title: "Something Wrong!",
                message: err.toString()
            }
        });
    }
}

export const updateLocation = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                isExpressValidation: true,
                data: {
                    title: "Validation Errors!",
                    message: "Validation Error!",
                    validationError: errors.array()
                }
            });
        }

        const { id, name, lot, inActive, DepartmentId } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.Location.update({
            name,
            lot,
            inActive,
            updatedBy: badgeId,
            DepartmentId
        }, { where: { id } });

        return res.status(200).json({
            message: `Success Update Location!`,
            data: response
        });
    } catch (err) {
        errorLogging(err.toString());
        return res.status(401).json({
            isExpressValidation: false,
            data: {
                title: "Something Wrong!",
                message: err.toString()
            }
        });
    }
}