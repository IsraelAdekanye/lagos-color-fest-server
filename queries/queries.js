const express = require('express');
const {Pool} = require('pg');

const pgPool = new Pool({
    host: 'localhost',
    user: 'israel',
    port: 5432,
    password: 'rootUser',
    database: 'lagos_color_fest'
});

const createEntry = {
    
}

module.exports={
    pgPool
}