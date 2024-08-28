/**
 * Este archivo lo usamos sobre todo para conectarnos a la bd, definir el puerto en el
 * que se ejecutara el servidor y configurar las rutas para cada Routes (tenemos un routes
 * por cada modelo/entidad)
 */

import express from "express";
import cors from 'cors'
import db from "./database/db.js"
import usuarioRoutes from './routes/routesUsuario.js'
import cuentaRoutes from './routes/routesCuenta.js'
import gastoRoutes from './routes/routesGasto.js'
import notificacionRoutes from './routes/routesNotificacion.js'
import sugerenciasRoutes from './routes/routesSugerencias.js'
import ingresoRoutes from './routes/routesIngreso.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express()

//configuraciones
app.use(cors())
app.use(express.json())
//Enlace para las rutas
app.use('/usuarios', usuarioRoutes)
app.use('/cuentas', cuentaRoutes)
app.use('/gastos', gastoRoutes)
app.use('/notificaciones', notificacionRoutes)
app.use('/sugerencias', sugerenciasRoutes)
app.use('/ingresos', ingresoRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log('El error de conexion es: ${error}')
}

app.listen(8000,()=>{
    console.log('Puerto 8000 conexion correcta')
})