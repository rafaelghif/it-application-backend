import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";
import { Op } from "sequelize";

export const getPhones = async (req, res) => {
    try {
        const { search } = req.query;

        let where = {}

        if (search) {
            where = {
                [Op.or]: [
                    { name: { [Op.like]: `%${search}%` } },
                    { extNo: { [Op.like]: `%${search}%` } },
                    { speedDialNo: { [Op.like]: `%${search}%` } },
                    { "$Department.name$": { [Op.like]: `%${search}%` } },
                    { "$Department.abbreviation$": { [Op.like]: `%${search}%` } }
                ]
            }
        }

        const response = await models.Phone.findAll({
            order: [["name", "ASC"]],
            where,
            include: [{
                model: models.Department,
                attributes: ["id", "name", "abbreviation"],
                required: true
            }],
        });

        return res.status(200).json({
            message: "Success Fetch Phones!",
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

export const getActivePhones = async (req, res) => {
    try {
        const { search } = req.query;

        let where = {
            inActive: false
        }

        if (search) {
            where = {
                ...where,
                [Op.or]: [
                    { name: { [Op.like]: `%${search}%` } },
                    { extNo: { [Op.like]: `%${search}%` } },
                    { speedDialNo: { [Op.like]: `%${search}%` } },
                    { "$Department.name$": { [Op.like]: `%${search}%` } },
                    { "$Department.abbreviation$": { [Op.like]: `%${search}%` } }
                ]
            }
        }

        const response = await models.Phone.findAll({
            order: [["name", "ASC"]],
            include: [{
                model: models.Department,
                attributes: ["id", "name", "abbreviation"]
            }],
            where
        });

        return res.status(200).json({
            message: "Success Fetch Active Phones!",
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

export const createPhone = async (req, res) => {
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

        const { name, extNo, speedDialNo, DepartmentId } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.Phone.create({
            name,
            extNo,
            speedDialNo,
            createdBy: badgeId,
            updatedBy: badgeId,
            DepartmentId
        });

        return res.status(200).json({
            message: `Success Create Phone!`,
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

export const updatePhone = async (req, res) => {
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

        const { id, name, extNo, speedDialNo, DepartmentId, inActive } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.Phone.update({
            name,
            extNo,
            speedDialNo,
            inActive,
            updatedBy: badgeId,
            DepartmentId
        }, { where: { id } });

        return res.status(200).json({
            message: `Success Update Phone!`,
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