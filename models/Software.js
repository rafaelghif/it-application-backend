import { DataTypes } from "sequelize";
import connectionDatabase from "../configs/database.js";

export const Software = connectionDatabase.define("Software", {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    version: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    licenseType: {
        type: DataTypes.ENUM("Subscription", "Perpetual"),
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    expireDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("expireDate", val || null);
        }
    },
    remark: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("remark", val || null);
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

export default Software;