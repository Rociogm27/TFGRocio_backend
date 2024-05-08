import TipoIngresoModel from "../models/TipoIngresoModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllTipoIngresos = async (req, res) => {
    try {
        const tipoingresos = await TipoIngresoModel.findAll()
        res.json(tipoingresos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}