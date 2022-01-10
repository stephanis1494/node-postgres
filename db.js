const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'socratica',
    host: 'localhost',
    port: 5432,
    database: 'juan-personal-games-db'
})

module.exports = pool 
