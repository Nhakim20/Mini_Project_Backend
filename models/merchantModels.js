import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Merchant = db.define('merchant',{
    password: {
       type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    join_date: {
        type: DataTypes.DATE
    },
    phone_number: {
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true,
    timestamps: false
});

export default Merchant;