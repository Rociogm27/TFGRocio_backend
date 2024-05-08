import express  from "express";
import { getAllAdministradores } from "../controllers/AdministradorController.js";

const routerAdministrador = express.Router()

routerAdministrador.get('/', getAllAdministradores)

export default routerAdministrador