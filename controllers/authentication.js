import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";

export const authentication = async (req, res) => {
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

        const { badgeId, password } = req.body;

        const user = await models.User.findOne({
            where: {
                badgeId: badgeId,
                inActive: false
            },
            include: [{
                model: models.Department,
                attributes: ["id", "name", "abbreviation"],
                where: {
                    inActive: false
                },
                required: true
            }]
        });

        if (!user) {
            return res.status(401).json({
                isExpressValidation: false,
                data: {
                    title: "Authentication Failed!",
                    message: "Username not found! Please contact engineering!"
                }
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
                isExpressValidation: false,
                data: {
                    title: "Authentication Failed!",
                    message: "Wrong password!"
                }
            });
        }

        const token = jwt.sign({ id: user.id, badgeId: user.badgeId }, process.env.JWT_KEY, { expiresIn: "8h" });

        const userData = {
            badgeId: user.badgeId,
            name: user.name,
            role: user.role
        }

        const department = {
            id: user.Department.id,
            name: user.Department.name,
            abbreviation: user.Department.abbreviation
        }

        return res.status(200).json({
            message: `Welcome ${user.name}`,
            data: {
                token: token,
                user: userData,
                department: department,
            }
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