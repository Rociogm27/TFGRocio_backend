import express  from "express";
import { getAllHistorialGastos } from "../controllers/HistorialGastoController.js";

const routerHistorialGasto = express.Router()

routerHistorialGasto.get('/', getAllHistorialGastos)

export default routerHistorialGasto