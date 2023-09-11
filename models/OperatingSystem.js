import { DataTypes } from "sequelize";
import connectionDatabase from "../configs/database.js";

const OperatingSystem = connectionDatabase.define("OperatingSystem", {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    architecture: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    buildNumber: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    version: {
        type: DataTypes.STRING(25),
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

export default OperatingSystem;