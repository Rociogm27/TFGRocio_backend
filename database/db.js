import { Sequelize } from 'sequelize';

/*const db = mysql.createConnection({
    host: "localhost",
    user:"tfg_user",
    password:"usuario27",
    database:"tfg"
});
*/
const db = new Sequelize('tfg', 'tfg_user', 'usuario27', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db