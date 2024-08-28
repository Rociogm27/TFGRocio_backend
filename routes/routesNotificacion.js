import express from "express";
import { 
    createNotificacion, 
    deleteNotificacion, 
    getAllNotificaciones, 
    getNotificacion, 
    updateNotificacion, 
    getNotificacionesByUser 
} from "../controllers/NotificacionController.js";
import verifyToken from '../middleware/auth.js'; // Importa el middleware de verificación de token

const routerNotificacion = express.Router()

routerNotificacion.get('/', verifyToken, getAllNotificaciones);
routerNotificacion.get('/:id', verifyToken, getNotificacion);
routerNotificacion.get('/user/:id', verifyToken, getNotificacionesByUser);
routerNotificacion.post('/', verifyToken, createNotificacion);
routerNotificacion.put('/:id', verifyToken, updateNotificacion);
routerNotificacion.delete('/:id', verifyToken, deleteNotificacion);

export default routerNotificacion;
