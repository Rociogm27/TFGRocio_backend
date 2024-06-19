import express  from "express";
import { createUsuario, deleteUsuario, getAllUsuarios, getUsuario, updateUsuario, loginUsuario } from "../controllers/UsuarioController.js";
import verifyToken from '../middleware/auth.js';


const routerUsuario = express.Router()

routerUsuario.get('/', getAllUsuarios);
routerUsuario.get('/:id', getUsuario);
routerUsuario.post('/', createUsuario)
routerUsuario.put('/:id',  updateUsuario);
routerUsuario.delete('/:id', deleteUsuario);
routerUsuario.post('/login',loginUsuario)

export default routerUsuario