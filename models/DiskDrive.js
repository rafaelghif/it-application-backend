import { DataTypes } from "sequelize";
import connectionDatabase from "../configs/database.js";

const DiskDrive = connectionDatabase.define("DiskDrive", {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    model: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    diskType: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    size: {
        type: DataTypes.STRING(10),
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

export default DiskDrive;