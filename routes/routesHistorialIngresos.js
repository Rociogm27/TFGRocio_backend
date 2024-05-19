import express  from "express";
import { createHistorialIngreso, deleteHistorialIngreso, getAllHistorialIngresos, getHistorialIngreso, updateHistorialIngreso } from "../controllers/HistorialIngresoController.js";

const routerHistorialIngreso = express.Router()

routerHistorialIngreso.get('/', getAllHistorialIngresos)
routerHistorialIngreso.get('/:id', getHistorialIngreso)
routerHistorialIngreso.post('/', createHistorialIngreso)
routerHistorialIngreso.put('/:id', updateHistorialIngreso)
routerHistorialIngreso.delete('/:id', deleteHistorialIngreso)

export default routerHistorialIngreso