import { Sequelize } from 'sequelize';


const db = new Sequelize('tfg', 'tfg_user', 'usuario27', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db