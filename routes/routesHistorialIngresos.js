import express  from "express";
import { getAllHistorialIngresos } from "../controllers/HistorialIngresoController.js";

const routerHistorialIngreso = express.Router()

routerHistorialIngreso.get('/', getAllHistorialIngresos)

export default routerHistorialIngreso