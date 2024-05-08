import CuentaModel from "../models/CuentaModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllCuentas = async (req, res) => {
    try {
        const cuentas = await CuentaModel.findAll()
        res.json(cuentas)
    } catch (error) {
        res.json( {message: error.message} )
    }
}