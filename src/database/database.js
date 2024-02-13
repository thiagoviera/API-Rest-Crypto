import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "flixxo",
    "postgres",
    "password",
    {
        host: "localhost",
        dialect: "postgres",
    }
);