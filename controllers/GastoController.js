import GastoModel from "../models/GastoModel.js";

//metodos del CRUD

//Mostrar 
export const getAllGastos = async (req, res) => {
    try {
        const gastos = await GastoModel.findAll()
        res.json(gastos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getGasto = async (req, res) => {
    try {
        const gasto = await GastoModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(gasto[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createGasto = async (req,res) => {
    try {
        await GastoModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Gasto creado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateGasto = async (req,res) => {
    try {
        await GastoModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Gasto actualizada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar
export const deleteGasto = async (req,res) => {
    try {
        await GastoModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Gasto eliminada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}