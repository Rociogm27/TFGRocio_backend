import express  from "express";
import { createGasto, deleteGasto, getAllGastos, getGasto, updateGasto, getAllGastosCuenta } from "../controllers/GastoController.js";
import verifyToken from '../middleware/auth.js'; // Importa el middleware de verificación de token

const routerGasto = express.Router()

routerGasto.get('/',verifyToken, getAllGastos)
routerGasto.get('/:id',verifyToken, getGasto)
routerGasto.get('/cuenta/:id',verifyToken, getAllGastosCuenta)
routerGasto.post('/',verifyToken, createGasto)
routerGasto.put('/:id',verifyToken, updateGasto)
routerGasto.delete('/:id',verifyToken, deleteGasto)

export default routerGasto