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