//importamos la conexion a la bd
import db from "../database/db.js";

import { DataTypes } from "sequelize";

/**
 * Con esta clase hacemos el "mapeo" de la bd.
 * Creamos el modelo administrador con los atributos definidos en la base de datos
 * salvo el id, createdAt y updatedAt
 */

const AdministradorModel = db.define('administrador', {
    nombre: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING},
    contrasena: { type: DataTypes.STRING}
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
   })

export default AdministradorModel