import db from "../database/db.js";

import { DataTypes } from "sequelize";



const HistorialIngresoModel = db.define('historial_ingresos', {
    usuario_id: { type: DataTypes.INTEGER },
    fecha: { type: DataTypes.DATE },
    cantidad: { type: DataTypes.INTEGER}
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
})

export default HistorialIngresoModel