import { DataTypes } from "sequelize";
import connectionDatabase from "../configs/database.js";

const PersonalComputer = connectionDatabase.define("PersonalComputer", {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    assetNo: {
        type: DataTypes.STRING(70),
        allowNull: true,
        defaultValue: null
    },
    invoiceNo: {
        type: DataTypes.STRING(70),
        allowNull: true,
        defaultValue: null
    },
    ownerName: {
        type: DataTypes.STRING(80),
        allowNull: true,
        defaultValue: null
    },
    previousOwner: {
        type: DataTypes.STRING(80),
        allowNull: true,
        defaultValue: null
    },
    detailName: {
        type: DataTypes.STRING(80),
        allowNull: true,
        defaultValue: null
    },
    name: {
        type: DataTypes.STRING(25),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("name", val || null);
        }
    },
    username: {
        type: DataTypes.STRING(25),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("username", val || null);
        }
    },
    domain: {
        type: DataTypes.STRING(25),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("domain", val || null);
        }
    },
    manufacturer: {
        type: DataTypes.STRING(25),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("manufacturer", val || null);
        }
    },
    model: {
        type: DataTypes.STRING(70),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("model", val || null);
        }
    },
    pcType: {
        type: DataTypes.STRING(25),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("pcType", val || null);
        }
    },
    serialNumber: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    processor: {
        type: DataTypes.STRING(70),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("processor", val || null);
        }
    },
    architecture: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("architecture", val || null);
        }
    },
    totalMemory: {
        type: DataTypes.STRING(15),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("totalMemory", val || null);
        }
    },
    purchaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
    },
    expireDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
    },
    status: {
        type: DataTypes.ENUM("Operational", "Not Operating", "Repair", "Dispose"),
        defaultValue: "Operational"
    },
    remark: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("remark", val || null);
        }
    },
    additionalSoftware: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("additionalSoftware", val || null);
        }
    },
    category: {
        type: DataTypes.ENUM("Unspecified", "Server", "Personal Computer", "Laptop"),
        defaultValue: "Unspecified"
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

export default PersonalComputer;