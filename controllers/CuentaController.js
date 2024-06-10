import CuentaModel from "../models/CuentaModel.js";

//metodos del CRUD

//Mostrar las cuentas
export const getAllCuentas = async (req, res) => {
    try {
        const cuentas = await CuentaModel.findAll()
        res.json(cuentas)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//mostrar todas las cuentas de un usuario
export const getAllCuentasUser = async (req,res) => {
    try {
        const cuentasUser = await CuentaModel.findAll({
            where:{ usuario_id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(cuentasUser)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getCuenta = async (req, res) => {
    try {
        const cuenta = await CuentaModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(cuenta[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createCuenta = async (req,res) => {
    try {
        await CuentaModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Cuenta creado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateCuenta = async (req,res) => {
    try {
        await CuentaModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Cuenta actualizada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar 
export const deleteCuenta = async (req,res) => {
    try {
        await CuentaModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Cuenta eliminada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}