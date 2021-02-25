
const Sequelize = require('sequelize');
const sql = new Sequelize('users', 'root', 'M11.n1.5am', {
    host: 'localhost',         //127.0.0.1
    dialect: 'mysql'
});


const Mensaje = sql.define("mensajes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    owner:{
        type: Sequelize.STRING,
        allowNull: false
    }
    //! array con id de comentarios asociados al mensaje
},{ timestramps: true });


// const Coment = sql.define("comentarios", {
//     Id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoincrement: true
//     },
//     Message:{
//         type: Sequelize.TEXT,
//         allowNull: false
//     },
//     Owner:{
//         //*captura del id del usuario quien comenta
//     }
// },{ timestramps: true });


sql.sync()
.then(() =>{
    console.log('Tablas creadas');
});

module.exports = {Mensaje};

// module.exports = (sql, type) => {
//     return sql.define('quotes', {
//       id: {
//         type: type.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//       },
//       author: type.STRING,
//       quote: type.STRING
//     });
//   }