import express  from "express";
import { createSugerencia, deleteSugerencia, getAllSugerencias, getSugerencia, updateSugerencia } from "../controllers/SugerenciaController.js";

const routerSugerencia = express.Router()

routerSugerencia.get('/', getAllSugerencias)
routerSugerencia.get('/:id', getSugerencia)
routerSugerencia.post('/', createSugerencia)
routerSugerencia.put('/:id', updateSugerencia)
routerSugerencia.delete('/:id', deleteSugerencia)

export default routerSugerencia