import express  from "express";
import { createCuenta, deleteCuenta, getAllCuentas, getCuenta, updateCuenta, getAllCuentasUser } from "../controllers/CuentaController.js";

const routerCuenta = express.Router()

routerCuenta.get('/', getAllCuentas)
routerCuenta.get('/:id', getCuenta)
routerCuenta.get('/user/:id', getAllCuentasUser)
routerCuenta.post('/', createCuenta)
routerCuenta.put('/:id', updateCuenta)
routerCuenta.delete('/:id', deleteCuenta)

export default routerCuenta