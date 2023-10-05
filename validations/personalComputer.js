import { body, param } from "express-validator";

export const getPersonalComputersRule = [
    param("category").notEmpty().withMessage("Category no cannot be empty"),
];

export const createPersonalComputerRule = [
    body("assetNo").notEmpty().withMessage("Asset no cannot be empty"),
    body("invoiceNo").notEmpty().withMessage("Invoice no cannot be empty"),
    body("ownerName").notEmpty().withMessage("Owner name cannot be empty"),
    body("detailName").notEmpty().withMessage("Detail name cannot be empty"),
    body("serialNumber").notEmpty().withMessage("Serial Number no cannot be empty"),
    body("category").notEmpty().withMessage("Category no cannot be empty"),
    body("DepartmentId").notEmpty().withMessage("Department Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("LocationId").notEmpty().withMessage("Location Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
];


export const updatePersonalComputerRule = [
    body("id").notEmpty().withMessage("Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("assetNo").notEmpty().withMessage("Asset no cannot be empty"),
    body("invoiceNo").notEmpty().withMessage("Invoice no cannot be empty"),
    body("ownerName").notEmpty().withMessage("Owner name cannot be empty"),
    body("previousOwner").notEmpty().withMessage("Previous Owner name cannot be empty"),
    body("detailName").notEmpty().withMessage("Detail name cannot be empty"),
    body("name").notEmpty().withMessage("Name cannot be empty"),
    body("username").notEmpty().withMessage("Username cannot be empty"),
    body("domain").notEmpty().withMessage("Domain cannot be empty"),
    body("purchaseDate").notEmpty().withMessage("Purchase Date cannot be empty"),
    body("expireDate").notEmpty().withMessage("Expire Date cannot be empty"),
    body("status").notEmpty().withMessage("Status cannot be empty"),
    body("category").notEmpty().withMessage("Category no cannot be empty"),
    body("inActive").notEmpty().withMessage("InActive cannot be null")
        .isBoolean().withMessage("Invalid inActive type"),
    body("DepartmentId").notEmpty().withMessage("Department Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("LocationId").notEmpty().withMessage("Location Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
];

export const updatePersonalComputerCategoryRule = [
    body("id").notEmpty().withMessage("Id cannot be null")
        .isUUID("4").withMessage("Invalid id type"),
    body("category").notEmpty().withMessage("Category no cannot be empty"),
];

