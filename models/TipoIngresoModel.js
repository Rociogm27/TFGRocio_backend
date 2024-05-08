import db from "../database/db.js";

import { DataTypes } from "sequelize";



const TipoIngresoModel = db.define('tipo_ingreso', {
    ingreso_id: { type: DataTypes.INTEGER },
    nombre_tipo: { type: DataTypes.STRING },
    es_fijo: { type: DataTypes.INTEGER}
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
})

export default TipoIngresoModel