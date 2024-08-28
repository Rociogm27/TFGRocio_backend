import UsuarioModel from "../models/UsuarioModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import IngresoModel from "../models/IngresoModel.js";
import GastoModel from "../models/GastoModel.js";
import NotificacionModel from "../models/NotificacionModel.js";
import CuentaModel from "../models/CuentaModel.js";


// Función para verificar gastos e ingresos fijos y enviar notificaciones
const verificarGastosIngresosFijos = async (userId) => {
    try {
        const cuentas = await CuentaModel.findAll({ where: { usuario_id: userId } });
        const notificaciones = [];

        for (const cuenta of cuentas) {
            const gastosFijos = await GastoModel.findAll({ where: { cuenta_id: cuenta.id, es_fijo: 1 } });
            const ingresosFijos = await IngresoModel.findAll({ where: { cuenta_id: cuenta.id, es_fijo: 1 } });

            gastosFijos.forEach(async gasto => {
                const fechaCreacion = new Date(gasto.fecha);
                const ahora = new Date();
                const diffMeses = (ahora.getFullYear() - fechaCreacion.getFullYear()) * 12 + (ahora.getMonth() - fechaCreacion.getMonth());
                
                if (diffMeses >= 1 && diffMeses % 1 === 0) {
                    notificaciones.push({
                        usuario_id: userId,
                        mensaje: `Gasto fijo encontrado: ${gasto.descripcion}.  Regenere el gasto en el apartado inicio`,
                        fecha_creacion: new Date()
                    });

                    await GastoModel.update({ es_fijo: 0 }, { where: { id: gasto.id } });
                }
            });

            ingresosFijos.forEach(async ingreso => {
                const fechaCreacion = new Date(ingreso.fecha);
                const ahora = new Date();
                const diffMeses = (ahora.getFullYear() - fechaCreacion.getFullYear()) * 12 + (ahora.getMonth() - fechaCreacion.getMonth());
                
                if (diffMeses >= 1 && diffMeses % 1 === 0) {
                    notificaciones.push({
                        usuario_id: userId,
                        mensaje: `Ingreso fijo encontrado: ${ingreso.descripcion}. Regenere el ingreso en el apartado inicio`,
                        fecha_creacion: new Date()
                    });
                    // Actualizar el ingreso para que no sea fijo
                    await IngresoModel.update({ es_fijo: 0 }, { where: { id: ingreso.id } });
                }
            });
        }

        // Crear notificaciones en la base de datos
        if (notificaciones.length > 0) {
            await NotificacionModel.bulkCreate(notificaciones);
        }

    } catch (error) {
        console.error('Error verificando gastos e ingresos fijos:', error);
    }
};


export const loginUsuario = async (req, res) => {
    const { id } = req.body;

    try {

      // Crear y asignar un token
    const token = jwt.sign({ id: req.body.id }, process.env.TOKEN_SECRET || 'rociogm27', { expiresIn: '1h' });
    res.header('auth-token', token).json({ token });

    //controlamos tambien si hay que generar las notificaciones de gastos fijos 
    await verificarGastosIngresosFijos(req.body.id);

    } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    }
};


//metodos del CRUD

//Mostrar los usuarios
export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar 
export const updateUsuario = async (req,res) => {
    try {
        await UsuarioModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message":"Usuario actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findAll({
            where:{ id:req.params.id}   //Nos pasan el id y lo cogemos haciendo req.params.id
        })
        res.json(usuario[0])
    } catch (error) {
        res.json( {message : error.message} )
    }
}

export const createUsuario = async (req,res) => {
    try {
        console.log(req.body)
        await UsuarioModel.create(req.body)     //Capturamos todo el objeto con req.body 
        res.json({                              //Mostramos un json que diga  se ha creado correctamente
            "message" : "Usuariocreado correctamente"
        })
    } catch (error) {
        res.json( {message : error.message} )
    }
}


//Eliminar
export const deleteUsuario = async (req,res) => {
    try {
        await UsuarioModel.destroy({
            where: { id: req.params.id } 
        })
        res.json({
            "message":"Usuario eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}