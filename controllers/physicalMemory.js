import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";

export const getPhysicalMemoryByPersonalComputer = async (req, res) => {
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

        const { personalComputerId } = req.params;

        const response = await models.PhysicalMemory.findAll({
            where: {
                PersonalComputerId: personalComputerId
            },
            order: [["location","ASC"]]
        });

        return res.status(200).json({
            message: "Success Fetch Physical Memories!",
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