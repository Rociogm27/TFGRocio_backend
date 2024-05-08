import express  from "express";
import { getAllGastos } from "../controllers/GastoController.js";

const routerGasto = express.Router()

routerGasto.get('/', getAllGastos)

export default routerGasto