import HistorialIngresoModel from "../models/HistorialIngresoModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllHistorialIngresos = async (req, res) => {
    try {
        const historialIngresos = await HistorialIngresoModel.findAll()
        res.json(historialIngresos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getHistorialIngreso = async (req, res) => {
    try {
        const historialingreso = await HistorialIngresoModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(historialingreso[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createHistorialIngreso = async (req,res) => {
    try {
        await HistorialIngresoModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Historial Ingreso creado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateHistorialIngreso = async (req,res) => {
    try {
        await HistorialIngresoModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Historial Ingreso actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar
export const deleteHistorialIngreso= async (req,res) => {
    try {
        await HistorialIngresoModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Historial Ingreso eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}