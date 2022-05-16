import { Sequelize } from "sequelize";

const db = new Sequelize('mini_project', 'root', 'root', {
  host: "localhost",
  dialect: "mysql"
});

export default db