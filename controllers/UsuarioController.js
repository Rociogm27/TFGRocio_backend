import UsuarioModel from "../models/UsuarioModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json( {message: error.message} )
    }
}