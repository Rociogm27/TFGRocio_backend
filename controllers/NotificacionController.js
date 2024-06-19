import NotificacionModel from "../models/NotificacionModel.js";

//metodos del CRUD

export const getNotificacionesByUser = async (req, res) => {
    try {
        const notificaciones = await NotificacionModel.findAll({
            where: { usuario_id: req.params.id }
        });
        res.json(notificaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//Mostrar las notificaciones 
export const getAllNotificaciones = async (req, res) => {
    try {
        const notificaciones = await NotificacionModel.findAll()
        res.json(notificaciones)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getNotificacion = async (req, res) => {
    try {
        const notificacion = await NotificacionModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(notificacion[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createNotificacion = async (req,res) => {
    try {
        await NotificacionModel.create(req.body)     //Capturamos todo el objeto con req.body
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Notificacion creada correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}

//Actualizar 
export const updateNotificacion = async (req,res) => {
    try {
        await NotificacionModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Notificacion actualizada correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar
export const deleteNotificacion = async (req,res) => {
    try {
        await NotificacionModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Notificacion eliminada correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}