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