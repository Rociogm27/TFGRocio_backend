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