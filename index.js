const express = require('express');
const cors = require('cors');
const { pgPool } = require('./queries/queries');
const getAttendeesRouter = require('./routes/getAttendeesRoute');
const attendeeRegRouter = require('./routes/attendeesRegRoute');
require('dotenv').config();

// const {Pool} = require('pg');

// const pgPool = new Pool({
//     host: 'localhost',
//     user: 'israel',
//     port: 5432,
//     password: 'rootUser',
//     database: 'lagos_color_fest'
// });

const app = express();
app.use(express.json())
app.use(cors({
    origin: '*'
}));

app.use('/register', cors(), attendeeRegRouter);
app.use('/getAll', cors(), getAttendeesRouter);
app.get('/', async (req, res)=>{
    try {
        const {rows} = await pgPool.query(`SELECT * FROM attendees`);
        res.status(200).json(rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
pgPool.connect().then( ()=> {
    app.listen(process.env.PORT, () => {
        console.log(`You are Connected to PostgreSQL Database and Server has started on port ${process.env.PORT} at ${Date.now()}`)
    })
})
.catch((error)=>{
    console.log(error);
});
