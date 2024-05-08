import express  from "express";
import { getAllTipoIngresos } from "../controllers/TipoIngresoController.js";

const routerTipoIngreso = express.Router()

routerTipoIngreso.get('/', getAllTipoIngresos)

export default routerTipoIngreso