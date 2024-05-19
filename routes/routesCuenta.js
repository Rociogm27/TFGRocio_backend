import express  from "express";
import { createCuenta, deleteCuenta, getAllCuentas, getCuenta, updateCuenta } from "../controllers/CuentaController.js";

const routerCuenta = express.Router()

routerCuenta.get('/', getAllCuentas)
routerCuenta.get('/:id', getCuenta)
routerCuenta.post('/', createCuenta)
routerCuenta.put('/:id', updateCuenta)
routerCuenta.delete('/:id', deleteCuenta)

export default routerCuenta