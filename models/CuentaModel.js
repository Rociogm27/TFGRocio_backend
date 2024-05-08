import db from "../database/db.js";

import { DataTypes } from "sequelize";

const CuentaModel = db.define('cuenta', {
    usuario_id: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING },
    saldo_inicial: { type: DataTypes.STRING},
    saldo_actual: { type: DataTypes.STRING}
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
   })

export default CuentaModel