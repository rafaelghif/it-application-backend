import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";
import { Op } from "sequelize";

export const getSoftwares = async (req, res) => {
    try {
        const response = await models.Software.findAll({
            order: [["name", "ASC"]]
        });

        return res.status(200).json({
            message: "Success Fetch Softwares!",
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

export const getUnAssignedSoftware = async (req, res) => {
    try {

        const { search } = req.query;

        let where = {
            isAssigned: false
        }

        if (search) {
            where = {
                ...where,
                [Op.or]: [
                    { name: { [Op.like]: `%${search}%` } },
                    { productKey: { [Op.like]: `%${search}%` } }
                ]
            }
        }

        const response = await models.Software.findAll({
            order: [["name", "ASC"]],
            where
        });

        return res.status(200).json({
            message: "Success Fetch Un Assigned Softwares!",
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

export const createSoftware = async (req, res) => {
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

        const { name, version, licenseType, productKey, startDate, expireDate, remark } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.Software.create({
            name,
            version,
            licenseType,
            productKey,
            startDate,
            expireDate,
            remark,
            createdBy: badgeId,
            updatedBy: badgeId
        });

        return res.status(200).json({
            message: `Success Create Software!`,
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

export const updateSoftware = async (req, res) => {
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

        const { id, name, version, licenseType, productKey, startDate, expireDate, remark, inActive } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.Software.update({
            name,
            version,
            licenseType,
            productKey,
            startDate,
            expireDate,
            remark,
            inActive,
            updatedBy: badgeId
        }, { where: { id } });

        return res.status(200).json({
            message: `Success Update Software!`,
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