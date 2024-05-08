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