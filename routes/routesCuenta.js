import express from "express";
import { 
    createCuenta, 
    deleteCuenta, 
    getAllCuentas, 
    getCuenta, 
    updateCuenta, 
    getAllCuentasUser 
} from "../controllers/CuentaController.js";
import verifyToken from '../middleware/auth.js'; // Importa el middleware de verificación de token

const routerCuenta = express.Router()

routerCuenta.get('/', verifyToken, getAllCuentas);
routerCuenta.get('/:id', verifyToken, getCuenta);
routerCuenta.get('/user/:id', verifyToken, getAllCuentasUser);
routerCuenta.post('/', verifyToken, createCuenta);
routerCuenta.put('/:id', verifyToken, updateCuenta);
routerCuenta.delete('/:id', verifyToken, deleteCuenta);

export default routerCuenta;