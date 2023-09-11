import { DataTypes } from "sequelize";
import connectionDatabase from "../configs/database.js";

const Phone = connectionDatabase.define("Phone", {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    extNo: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("extNo", val || null);
        }
    },
    speedDialNo: {
        type: DataTypes.STRING(5),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("speedDialNo", val || null);
        }
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

export default Phone;