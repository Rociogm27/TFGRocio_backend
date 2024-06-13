//importamos la conexion a la bd
import db from "../database/db.js";

import { DataTypes } from "sequelize";

/**
 * Con esta clase hacemos el "mapeo" de la bd.
 * Creamos el modelo usuario con los atributos definidos en la base de datos
 * salvo el id, createdAt y updatedAt
 *    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
 */

const UsuarioModel = db.define('usuarios', {
    nombreUser: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING},
    contrasena: { type: DataTypes.STRING},
    presupuesto_mes: { type: DataTypes.INTEGER},
    admin: { type: DataTypes.INTEGER}
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
   })

export default UsuarioModel