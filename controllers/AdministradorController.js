import AdministradorModel from "../models/AdministradorModel.js";


//metodos del CRUD

//Mostrar los usuarios
export const getAllAdministradores = async (req, res) => {
    try {
        const administradores = await AdministradorModel.findAll()
        res.json(administradores)
    } catch (error) {
        res.json( {message: error.message} )
    }
}