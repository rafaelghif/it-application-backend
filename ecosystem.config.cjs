module.exports = {
  apps: [{
    name: "IT Application Backend",
    script: "index.js",
    env: {
      ENV: "Production",
      APP_PORT: 8090,
      JWT_KEY: "$2a$10$IbftkRjB1HOZPoNOybwX6OnvhKYIIlJhej0HCEByRaSZlr0WmlWvi",
      DEV_DB_HOST: "localhost",
      DEV_DB_PORT: 3306,
      DEV_DB_DATABASE_NAME: "it_application",
      DEV_DB_USERNAME: "root",
      DEV_DB_PASSWORD: "",
      PROD_DB_HOST: "10.137.1.5",
      PROD_DB_PORT: 3307,
      PROD_DB_DATABASE_NAME: "it_application",
      PROD_DB_USERNAME: "semiroot",
      PROD_DB_PASSWORD: "Adm!n@20*"
    },
    env_production: {
      ENV: "Production",
      APP_PORT: 8090,
      JWT_KEY: "$2a$10$IbftkRjB1HOZPoNOybwX6OnvhKYIIlJhej0HCEByRaSZlr0WmlWvi",
      DEV_DB_HOST: "localhost",
      DEV_DB_PORT: 3306,
      DEV_DB_DATABASE_NAME: "it_application",
      DEV_DB_USERNAME: "root",
      DEV_DB_PASSWORD: "",
      PROD_DB_HOST: "10.137.1.5",
      PROD_DB_PORT: 3307,
      PROD_DB_DATABASE_NAME: "it_application",
      PROD_DB_USERNAME: "semiroot",
      PROD_DB_PASSWORD: "Adm!n@20*"
    }
  }],
};
