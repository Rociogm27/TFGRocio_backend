import db from "../database/db.js";

import { DataTypes } from "sequelize";



const HistorialGastoModel = db.define('historial_gastos', {
    usuario_id: { type: DataTypes.INTEGER },
    fecha: { type: DataTypes.DATE },
    cantidad: { type: DataTypes.INTEGER}
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
})

export default HistorialGastoModel