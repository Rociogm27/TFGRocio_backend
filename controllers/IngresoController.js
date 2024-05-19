import IngresoModel from "../models/IngresoModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllIngresos= async (req, res) => {
    try {
        const ingresos = await IngresoModel.findAll()
        res.json(ingresos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}


export const getIngreso = async (req, res) => {
    try {
        const ingreso = await IngresoModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(ingreso[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createIngreso = async (req,res) => {
    try {
        await IngresoModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Ingreso creado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateIngreso = async (req,res) => {
    try {
        await IngresoModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Ingreso actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar
export const deleteIngreso= async (req,res) => {
    try {
        await IngresoModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Ingreso eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}