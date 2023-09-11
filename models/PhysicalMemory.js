import { DataTypes } from "sequelize";
import connectionDatabase from "../configs/database.js";

const PhysicalMemory = connectionDatabase.define("PhysicalMemory", {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    partNumber: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    memoryType: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    manufacturer: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    speed: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    size: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    serialNumber: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    inActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdBy: {
        type: DataTypes.STRING(8),
        allowNull: false,
        validate: {
            min: 8
        }
    },
    updatedBy: {
        type: DataTypes.STRING(8),
        allowNull: false,
        validate: {
            min: 8
        }
    }
});

export default PhysicalMemory;