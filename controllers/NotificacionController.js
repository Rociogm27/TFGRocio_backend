import NotificacionModel from "../models/NotificacionModel.js";

//metodos del CRUD

//Mostrar los usuarios
export const getAllNotificaciones = async (req, res) => {
    try {
        const notificaciones = await NotificacionModel.findAll()
        res.json(notificaciones)
    } catch (error) {
        res.json( {message: error.message} )
    }
}