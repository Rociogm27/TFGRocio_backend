import db from "../database/db.js";

import { DataTypes } from "sequelize";



const IngresoModel = db.define('ingreso', {
    cuenta_id: { type: DataTypes.INTEGER },
    fecha: { type: DataTypes.DATE },
    cantidad: { type: DataTypes.INTEGER},
    descripcion: { type: DataTypes.STRING}
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
})

export default IngresoModel