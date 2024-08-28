//importamos la conexion a la bd
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const UsuarioModel = db.define('usuarios', {
    nombreUser: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING},
    contrasena: { type: DataTypes.STRING},
    admin: { type: DataTypes.INTEGER}
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
})

export default UsuarioModel