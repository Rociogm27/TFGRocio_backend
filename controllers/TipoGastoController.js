import TipoGastoModel from "../models/TipoGastoModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllTipoGastos = async (req, res) => {
    try {
        const tipogastos = await TipoGastoModel.findAll()
        res.json(tipogastos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getTipoGasto = async (req, res) => {
    try {
        const tipoGasto = await TipoGastoModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(tipoGasto[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createTipoGasto = async (req,res) => {
    try {
        await TipoGastoModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Tipo Gasto creado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateTipoGasto = async (req,res) => {
    try {
        await TipoGastoModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Tipo Gasto actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar
export const deleteTipoGasto= async (req,res) => {
    try {
        await TipoGastoModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Tipo Gasto eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}