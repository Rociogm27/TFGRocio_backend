import express  from "express";
import { getAllCuentas } from "../controllers/CuentaController.js";

const routerCuenta = express.Router()

routerCuenta.get('/', getAllCuentas)

export default routerCuenta