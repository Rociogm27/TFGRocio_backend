import TipoGastoModel from "../models/TipoGastoModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllTipoGastos = async (req, res) => {
    try {
        const tipogastos = await TipoGastoModel.findAll()
        res.json(tipogastos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}