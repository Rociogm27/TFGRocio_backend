import express  from "express";
import { getAllSugerencias } from "../controllers/SugerenciaController.js";

const routerSugerencia = express.Router()

routerSugerencia.get('/', getAllSugerencias)

export default routerSugerencia