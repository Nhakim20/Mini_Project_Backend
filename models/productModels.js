import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('product',{
    nama: {
       type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true,
    timestamps: false
});

export default Product;

