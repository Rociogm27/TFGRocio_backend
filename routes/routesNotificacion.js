import express  from "express";
import { createNotificacion, deleteNotificacion, getAllNotificaciones, getNotificacion, updateNotificacion } from "../controllers/NotificacionController.js";

const routerNotificacion = express.Router()

routerNotificacion.get('/', getAllNotificaciones)
routerNotificacion.get('/:id', getNotificacion)
routerNotificacion.post('/', createNotificacion)
routerNotificacion.put('/:id', updateNotificacion)
routerNotificacion.delete('/:id', deleteNotificacion)

export default routerNotificacion