import express  from "express";
import { getAllIngresos } from "../controllers/IngresoController.js";

const routerIngreso = express.Router()

routerIngreso.get('/', getAllIngresos)

export default routerIngreso