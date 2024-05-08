import express  from "express";
import { getAllNotificaciones } from "../controllers/NotificacionController.js";

const routerNotificacion = express.Router()

routerNotificacion.get('/', getAllNotificaciones)

export default routerNotificacion