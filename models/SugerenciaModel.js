import db from "../database/db.js";

import { DataTypes } from "sequelize";



const SugerenciaModel = db.define('sugerencia', {
    descripcion: { type: DataTypes.STRING },
    fecha_creacion: { type: DataTypes.DATE }
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
})

export default SugerenciaModel