import express  from "express";
import { createUsuario, deleteUsuario, getAllUsuarios, getUsuario, updateUsuario } from "../controllers/UsuarioController.js";

const routerUsuario = express.Router()

routerUsuario.get('/', getAllUsuarios)
routerUsuario.get('/:id', getUsuario)
routerUsuario.post('/', createUsuario)
routerUsuario.put('/:id', updateUsuario)
routerUsuario.delete('/:id', deleteUsuario)

export default routerUsuario