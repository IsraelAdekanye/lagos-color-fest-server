require('dotenv').config();
const {Pool} = require('pg');

const pgPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
    rejectUnauthorized: false
}
});

const createEntry = {

}

module.exports={
    pgPool
}