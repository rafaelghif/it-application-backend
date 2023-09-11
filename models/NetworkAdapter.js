import { DataTypes } from "sequelize";
import connectionDatabase from "../configs/database.js";

const NetworkAdapter = connectionDatabase.define("NetworkAdapter", {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    caption: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    networkType: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    mac: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null,
        set(val) {
            this.setDataValue("mac", val || null);
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

export default NetworkAdapter;