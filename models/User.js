import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import connectionDatabase from "../configs/database.js";

const User = connectionDatabase.define("User", {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    badgeId: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true,
        validate: {
            min: 8
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(val) {
            this.setDataValue("password", bcrypt.hashSync(val, 10));
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
        validate: {
            isEmail: true,
        },
        set(val) {
            this.setDataValue("email", val || null);
        }
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("Super User", "Admin", "Basic"),
        defaultValue: "Basic"
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

export default User;