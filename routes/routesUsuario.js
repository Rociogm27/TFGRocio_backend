import express  from "express";
import { createUsuario, deleteUsuario, getAllUsuarios, getUsuario, updateUsuario, loginUsuario } from "../controllers/UsuarioController.js";

import verifyToken from '../middleware/auth.js'; // Importa el middleware de verificación de token

const routerUsuario = express.Router()

// Aplica el middleware verifyToken a las rutas que deseas proteger
routerUsuario.get('/', getAllUsuarios);
routerUsuario.get('/:id', getUsuario);
routerUsuario.post('/', createUsuario);
routerUsuario.put('/:id', verifyToken, updateUsuario);
routerUsuario.delete('/:id', verifyToken, deleteUsuario);

// La ruta de login no necesita estar protegida, ya que es para obtener el token
routerUsuario.post('/login', loginUsuario);

export default routerUsuario