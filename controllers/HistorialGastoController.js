import HistorialGastoModel from "../models/HistorialGastoModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllHistorialGastos = async (req, res) => {
    try {
        const historialGastos = await HistorialGastoModel.findAll()
        res.json(historialGastos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getHistorialGasto = async (req, res) => {
    try {
        const historialgasto = await HistorialGastoModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(historialgasto[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createHistorialGasto = async (req,res) => {
    try {
        await HistorialGastoModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Historial Gasto creado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateHistorialGasto = async (req,res) => {
    try {
        await HistorialGastoModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Historial Gasto actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar
export const deleteHistorialGasto = async (req,res) => {
    try {
        await HistorialGastoModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Historial Gasto eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}