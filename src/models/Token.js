import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const Token = sequelize.define("tokens", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DOUBLE,
    },
    description: {
        type: DataTypes.STRING,
    },
    priceHistory: {
        type: DataTypes.DOUBLE,
    },
}, {
    timestamps: true
});  
