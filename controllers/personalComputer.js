import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";
import { Op } from "sequelize";
import connectionDatabase from "../configs/database.js";

export const getPersonalComputers = async (req, res) => {
    try {
        const { search } = req.query;
        const { category } = req.params;

        let where = {
            category: category
        }

        if (search) {
            where = {
                category: category,
                [Op.or]: [
                    { assetNo: { [Op.like]: `%${search}%` } },
                    { invoiceNo: { [Op.like]: `%${search}%` } },
                    { serialNumber: { [Op.like]: `%${search}%` } },
                    { name: { [Op.like]: `%${search}%` } },
                    { username: { [Op.like]: `%${search}%` } },
                    { detailName: { [Op.like]: `%${search}%` } },
                    { domain: { [Op.like]: `%${search}%` } },
                    { ownerName: { [Op.like]: `%${search}%` } },
                    { processor: { [Op.like]: `%${search}%` } },
                    { status: { [Op.like]: `%${search}%` } },
                    { "$DiskDrives.diskType$": { [Op.like]: `%${search}%` } },
                ]
            }
        }

        const response = await models.PersonalComputer.findAll({
            order: [
                ["serialNumber", "ASC"]
            ],
            where,
            include: [{
                model: models.DiskDrive,
                attributes: []
            }, {
                model: models.Department,
                attributes: ["id", "name"]
            }, {
                model: models.Location,
                attributes: ["id", "name"]
            }, {
                model: models.OperatingSystem,
                attributes: ["id", "name", "version"]
            }]
        });

        return res.status(200).json({
            message: "Success Fetch Personal Computer!",
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

export const getUnspecificPersonalComputers = async (req, res) => {
    try {
        const { search } = req.query;

        let where = {
            category: "Unspecified"
        }

        if (search) {
            where = {
                category: "Unspecified",
                [Op.or]: [
                    { assetNo: { [Op.like]: `%${search}%` } },
                    { invoiceNo: { [Op.like]: `%${search}%` } },
                    { serialNumber: { [Op.like]: `%${search}%` } },
                    { name: { [Op.like]: `%${search}%` } },
                    { username: { [Op.like]: `%${search}%` } },
                    { detailName: { [Op.like]: `%${search}%` } },
                    { domain: { [Op.like]: `%${search}%` } },
                    { ownerName: { [Op.like]: `%${search}%` } },
                    { processor: { [Op.like]: `%${search}%` } },
                    { status: { [Op.like]: `%${search}%` } },
                    { "$DiskDrives.diskType$": { [Op.like]: `%${search}%` } },
                ]
            }
        }

        const response = await models.PersonalComputer.findAll({
            order: [
                ["serialNumber", "ASC"]
            ],
            where,
            include: [{
                model: models.DiskDrive,
                attributes: []
            }, {
                model: models.Department,
                attributes: ["id", "name"]
            }, {
                model: models.Location,
                attributes: ["id", "name"]
            }, {
                model: models.OperatingSystem,
                attributes: ["id", "name", "version"]
            }]
        });

        return res.status(200).json({
            message: "Success Fetch Personal Computer!",
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

export const createPersonalComputer = async (req, res) => {
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

        const { assetNo, invoiceNo, ownerName, detailName, serialNumber, DepartmentId, LocationId, category } = req.body;
        const { badgeId } = req.decoded;

        const response = await models.PersonalComputer.create({
            assetNo,
            invoiceNo,
            ownerName,
            detailName,
            serialNumber,
            DepartmentId,
            LocationId,
            category: category,
            createdBy: badgeId,
            updatedBy: badgeId
        });

        return res.status(200).json({
            message: `Success Create Personal Computer!`,
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

export const updatePersonalComputer = async (req, res) => {
    const transaction = await connectionDatabase.transaction();
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

        const {
            id,
            assetNo,
            invoiceNo,
            ownerName,
            previousOwner,
            detailName,
            name,
            username,
            domain,
            purchaseDate,
            expireDate,
            status,
            remark,
            category,
            inActive,
            DepartmentId,
            LocationId
        } = req.body;

        const { badgeId } = req.decoded;

        const personalComputer = await models.PersonalComputer.findByPk(id);

        await models.PersonalComputerHistory.create({
            assetNo: personalComputer.assetNo,
            invoiceNo: personalComputer.invoiceNo,
            ownerName: personalComputer.ownerName,
            previousOwner: personalComputer.previousOwner,
            detailName: personalComputer.detailName,
            name: personalComputer.name,
            username: personalComputer.username,
            domain: personalComputer.domain,
            manufacturer: personalComputer.manufacturer,
            model: personalComputer.model,
            pcType: personalComputer.pcType,
            serialNumber: personalComputer.serialNumber,
            processor: personalComputer.processor,
            architecture: personalComputer.architecture,
            totalMemory: personalComputer.totalMemory,
            purchaseDate: personalComputer.purchaseDate,
            expireDate: personalComputer.expireDate,
            status: personalComputer.status,
            remark: personalComputer.remark,
            category: category,
            inActive: personalComputer.inActive,
            createdBy: personalComputer.createdBy,
            updatedBy: personalComputer.updatedBy,
            createdAt: personalComputer.createdAt,
            updatedAt: personalComputer.updatedAt,
            PersonalComputerId: personalComputer.id,
        }, { transaction })

        const response = await models.PersonalComputer.update({
            assetNo,
            invoiceNo,
            ownerName,
            previousOwner,
            detailName,
            name,
            username,
            domain,
            purchaseDate,
            expireDate,
            status,
            remark,
            category: category,
            inActive,
            DepartmentId,
            LocationId,
            inActive,
            updatedBy: badgeId
        }, { where: { id }, transaction });

        transaction.commit();

        return res.status(200).json({
            message: `Success Update Personal Computer!`,
            data: response
        });
    } catch (err) {
        transaction.rollback();
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

export const updatePersonalComputerCategory = async (req, res) => {
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

        const {
            id,
            category
        } = req.body;

        const { badgeId } = req.decoded;

        const response = await models.PersonalComputer.update({
            category: category,
            updatedBy: badgeId
        }, { where: { id } });

        return res.status(200).json({
            message: `Success Update Personal Computer Category!`,
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