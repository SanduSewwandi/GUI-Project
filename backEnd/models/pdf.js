import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./user.js";


const Pdf = sequelize.define("Pdf", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true}
    
});

User.hasMany(Pdf, { foreignKey: "userId" });
Pdf.belongsTo(User, { foreignKey: "userId" });

export default Pdf
