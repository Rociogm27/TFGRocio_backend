import express  from "express";
import { getAllTipoGastos } from "../controllers/TipoGastoController.js";

const routerTipoGasto = express.Router()

routerTipoGasto.get('/', getAllTipoGastos)

export default routerTipoGasto