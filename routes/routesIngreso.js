import express  from "express";
import { createIngreso, deleteIngreso, getAllIngresos, getIngreso, updateIngreso, getAllIngresosCuenta } from "../controllers/IngresoController.js";

const routerIngreso = express.Router()

routerIngreso.get('/', getAllIngresos)
routerIngreso.get('/:id', getIngreso)
routerIngreso.get('/cuenta/:id', getAllIngresosCuenta)
routerIngreso.post('/', createIngreso)
routerIngreso.put('/:id', updateIngreso)
routerIngreso.delete('/:id', deleteIngreso)

export default routerIngreso