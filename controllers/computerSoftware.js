import { validationResult } from "express-validator";
import models from "../models/index.js";
import { errorLogging } from "../helpers/error.js";
import connectionDatabase from "../configs/database.js";

export const getComputerSoftwaresByPersonalComputerId = async (req, res) => {
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
		const response = await models.PersonalComputer.findOne({
			order: [["name", "ASC"]],
			where: {
				id: personalComputerId
			},
			include: [{
				model: models.Software,
			}]
		});

		return res.status(200).json({
			message: "Success Fetch Computer Software",
			data: response?.Software
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

export const createComputerSoftware = async (req, res) => {
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

		const { PersonalComputerId, SoftwareId } = req.body;
		const { badgeId } = req.decoded;

		const response = await models.ComputerSoftware.create({
			createdBy: badgeId,
			updatedBy: badgeId,
			PersonalComputerId,
			SoftwareId
		}, { transaction });

		await models.Software.update({
			isAssigned: true
		}, { where: { id: SoftwareId }, transaction });

		await transaction.commit();

		return res.status(200).json({
			message: `Success Update Personal Computer Software!`,
			data: response
		});
	} catch (err) {
		await transaction.rollback();
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