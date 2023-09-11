import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";

export const getCategories = async (req, res) => {
    try {
        const response = await models.Category.findAll({
            order: [["name", "ASC"]]
        });

        return res.status(200).json({
            message: "Success Fetch Categories!",
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

export const getActiveCategories = async (req, res) => {
    try {
        const response = await models.Category.findAll({
            order: [["name", "ASC"]],
            where: {
                inActive: false
            }
        });

        return res.status(200).json({
            message: "Success Fetch Active Categories!",
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

export const createCategory = async (req, res) => {
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

        const { name } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.Category.create({
            name,
            createdBy: badgeId,
            updatedBy: badgeId
        });

        return res.status(200).json({
            message: `Success Create Category!`,
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

export const updateCategory = async (req, res) => {
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

        const { id, name, inActive } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.Category.update({
            name,
            inActive,
            updatedBy: badgeId
        }, { where: { id } });

        return res.status(200).json({
            message: `Success Update Category!`,
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