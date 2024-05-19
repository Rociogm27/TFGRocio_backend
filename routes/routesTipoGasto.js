import express  from "express";
import { createTipoGasto, deleteTipoGasto, getAllTipoGastos, getTipoGasto, updateTipoGasto } from "../controllers/TipoGastoController.js";

const routerTipoGasto = express.Router()

routerTipoGasto.get('/', getAllTipoGastos)
routerTipoGasto.get('/:id', getTipoGasto)
routerTipoGasto.post('/', createTipoGasto)
routerTipoGasto.put('/:id', updateTipoGasto)
routerTipoGasto.delete('/:id', deleteTipoGasto)

export default routerTipoGasto