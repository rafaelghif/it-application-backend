import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const env = process.env.ENV ?? "Development";

const developmentConfig = {
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    database: process.env.DEV_DB_DATABASE_NAME,
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD
}

const productionConfig = {
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    database: process.env.PROD_DB_DATABASE_NAME,
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD
}

const config = env === "Development" ? developmentConfig : productionConfig;

const connectionDatabase = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: "mysql",
    timezone: "+07:00",
    logging: process.env.ENV === "Production" ? false : true
});

try {
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

export default connectionDatabase;