import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";

export const getSubCategoriesByCategoryId = async (req, res) => {
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

        const { categoryId } = req.params;

        const response = await models.SubCategory.findAll({
            order: [["name", "ASC"]],
            where: {
                CategoryId: categoryId
            }
        });

        return res.status(200).json({
            message: "Success Fetch Sub Categories!",
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

export const getActiveSubCategoriesByCategoryId = async (req, res) => {
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

        const { categoryId } = req.params;

        const response = await models.SubCategory.findAll({
            order: [["name", "ASC"]],
            where: {
                inActive: false,
                CategoryId: categoryId
            }
        });

        return res.status(200).json({
            message: "Success Fetch Sub Categories!",
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

export const createSubCategory = async (req, res) => {
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

        const { name, CategoryId } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.SubCategory.create({
            name,
            createdBy: badgeId,
            updatedBy: badgeId,
            CategoryId
        });

        return res.status(200).json({
            message: `Success Create Sub Category!`,
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

export const updateSubCategory = async (req, res) => {
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

        const { id, name, inActive,CategoryId } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.SubCategory.update({
            name,
            inActive,
            updatedBy: badgeId,
            CategoryId
        }, { where: { id } });

        return res.status(200).json({
            message: `Success Update Sub Category!`,
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