import db from "../database/db.js";

import { DataTypes } from "sequelize";



const NotificacionModel = db.define('notificacions', {
    usuario_id: { type: DataTypes.INTEGER },
    mensaje: { type: DataTypes.STRING },
    fecha_creacion: { type: DataTypes.DATE }
}, {
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
})

export default NotificacionModel