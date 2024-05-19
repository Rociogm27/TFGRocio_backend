import AdministradorModel from "../models/AdministradorModel.js";


//metodos del CRUD

//Mostrar los administradores 
export const getAllAdministradores = async (req, res) => {
    try {
        const administradores = await AdministradorModel.findAll()
        res.json(administradores)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getAdministrador = async (req, res) => {
    try {
        const admin = await AdministradorModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(admin[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createAdministrador = async (req,res) => {
    try {
        await AdministradorModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga que el almacen se ha creado correctamente
            "message" : "Administrador creado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateAdministrador = async (req,res) => {
    try {
        await AdministradorModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Administrador actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar 
export const deleteAdministrador = async (req,res) => {
    try {
        await AdministradorModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Administrador eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}