import express  from "express";
import { createTipoIngreso, deleteTipoIngreso, getAllTipoIngresos, getTipoIngreso, updateTipoIngreso } from "../controllers/TipoIngresoController.js";

const routerTipoIngreso = express.Router()

routerTipoIngreso.get('/', getAllTipoIngresos)
routerTipoIngreso.get('/:id', getTipoIngreso)
routerTipoIngreso.post('/', createTipoIngreso)
routerTipoIngreso.put('/:id', updateTipoIngreso)
routerTipoIngreso.delete('/:id', deleteTipoIngreso)

export default routerTipoIngreso