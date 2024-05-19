import express  from "express";
import { createHistorialGasto, deleteHistorialGasto, getAllHistorialGastos, getHistorialGasto, updateHistorialGasto } from "../controllers/HistorialGastoController.js";

const routerHistorialGasto = express.Router()

routerHistorialGasto.get('/', getAllHistorialGastos)
routerHistorialGasto.get('/:id', getHistorialGasto)
routerHistorialGasto.post('/', createHistorialGasto)
routerHistorialGasto.put('/:id', updateHistorialGasto)
routerHistorialGasto.delete('/:id', deleteHistorialGasto)

export default routerHistorialGasto