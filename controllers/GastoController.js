import GastoModel from "../models/GastoModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllGastos = async (req, res) => {
    try {
        const gastos = await GastoModel.findAll()
        res.json(gastos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}