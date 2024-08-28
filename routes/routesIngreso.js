import express from "express";
import { 
    createIngreso, 
    deleteIngreso, 
    getAllIngresos, 
    getIngreso, 
    updateIngreso, 
    getAllIngresosCuenta 
} from "../controllers/IngresoController.js";
import verifyToken from '../middleware/auth.js'; // Importa el middleware de verificación de token

const routerIngreso = express.Router()

routerIngreso.get('/', verifyToken, getAllIngresos);
routerIngreso.get('/:id', verifyToken, getIngreso);
routerIngreso.get('/cuenta/:id', verifyToken, getAllIngresosCuenta);
routerIngreso.post('/', verifyToken, createIngreso);
routerIngreso.put('/:id', verifyToken, updateIngreso);
routerIngreso.delete('/:id', verifyToken, deleteIngreso);

export default routerIngreso;
