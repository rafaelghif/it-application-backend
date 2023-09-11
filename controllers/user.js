import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";

export const getUsers = async (req, res) => {
    try {
        const response = await models.User.findAll({
            order: [["badgeId", "ASC"]],
            include: [{
                model: models.Department,
                attributes: ["id", "name"],
            }]
        });

        return res.status(200).json({
            message: "Success Fetch Users!",
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

export const createUser = async (req, res) => {
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

        const { badgeId, password, email, name, role, DepartmentId } = req.body;
        const { badgeId: by } = req.decoded;

        const response = await models.User.create({
            badgeId,
            password,
            email,
            name,
            role,
            createdBy: by,
            updatedBy: by,
            DepartmentId
        });

        return res.status(200).json({
            message: `Success Create User!`,
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

export const updateUser = async (req, res) => {
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

        const { id, badgeId, password, email, name, role, DepartmentId, inActive } = req.body;
        const { badgeId: by } = req.decoded;

        const user = await models.User.findByPk(id);

        const response = await models.User.update({
            badgeId,
            password: password === user.password ? undefined : password,
            name,
            email,
            role,
            inActive,
            updatedBy: by,
            DepartmentId
        }, { where: { id } });

        return res.status(200).json({
            message: `Success Update User!`,
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