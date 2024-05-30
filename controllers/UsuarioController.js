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

export const getUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(usuario[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createUsuario = async (req,res) => {
    try {
        console.log(req.body)
        await UsuarioModel.create(req.body)     //Capturamos todo el objeto con req.body 
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Usuariocreado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateUsuario = async (req,res) => {
    try {
        await UsuarioModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Usuario actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar
export const deleteUsuario = async (req,res) => {
    try {
        await UsuarioModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Usuario eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}