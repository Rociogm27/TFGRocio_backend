import express  from "express";
import { createAdministrador, deleteAdministrador, getAdministrador, getAllAdministradores, updateAdministrador } from "../controllers/AdministradorController.js";

const routerAdministrador = express.Router()

routerAdministrador.get('/', getAllAdministradores)
routerAdministrador.get('/:id', getAdministrador)
routerAdministrador.post('/', createAdministrador)
routerAdministrador.put('/:id', updateAdministrador)
routerAdministrador.delete('/:id', deleteAdministrador)

export default routerAdministrador