import SugerenciaModel from "../models/SugerenciaModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllSugerencias = async (req, res) => {
    try {
        const sugerencias = await SugerenciaModel.findAll()
        res.json(sugerencias)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getSugerencia = async (req, res) => {
    try {
        const sugerencia = await SugerenciaModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(sugerencia[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createSugerencia = async (req,res) => {
    try {
        await SugerenciaModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Sugerencia creada correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateSugerencia = async (req,res) => {
    try {
        await SugerenciaModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Sugerencia actualizada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar
export const deleteSugerencia = async (req,res) => {
    try {
        await SugerenciaModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Sugerencia eliminada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}