import express  from "express";
import { createGasto, deleteGasto, getAllGastos, getGasto, updateGasto, getAllGastosCuenta } from "../controllers/GastoController.js";

const routerGasto = express.Router()

routerGasto.get('/', getAllGastos)
routerGasto.get('/:id', getGasto)
routerGasto.get('/cuenta/:id', getAllGastosCuenta)
routerGasto.post('/', createGasto)
routerGasto.put('/:id', updateGasto)
routerGasto.delete('/:id', deleteGasto)

export default routerGasto