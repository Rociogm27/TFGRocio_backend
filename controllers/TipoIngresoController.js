import TipoIngresoModel from "../models/TipoIngresoModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllTipoIngresos = async (req, res) => {
    try {
        const tipoingresos = await TipoIngresoModel.findAll()
        res.json(tipoingresos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getTipoIngreso = async (req, res) => {
    try {
        const tipoIngreso = await TipoIngresoModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(tipoIngreso[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createTipoIngreso = async (req,res) => {
    try {
        await TipoIngresoModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Tipo Ingreso creado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateTipoIngreso = async (req,res) => {
    try {
        await TipoIngresoModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Tipo Ingreso actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar
export const deleteTipoIngreso = async (req,res) => {
    try {
        await TipoIngresoModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Tipo Ingreso eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}