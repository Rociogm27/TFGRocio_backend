import db from "../database/db.js";

import { DataTypes } from "sequelize";



const GastoModel = db.define('gastos', {
    cuenta_id: { type: DataTypes.INTEGER },
    fecha: { type: DataTypes.DATE },
    cantidad: { type: DataTypes.INTEGER},
    descripcion: { type: DataTypes.STRING}
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
})

export default GastoModel