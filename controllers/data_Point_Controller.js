const { pgPool } = require("../queries/queries");

// CREATE NEW PARENT RECORD
const creatAttendee = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, gender
    } = req.body

    //Add new row to DB

    try {
        const {rows} = await pgPool.query(`INSERT INTO attendees (firstName, lastName, email, phoneNumber, gender) 
            VALUES ('${firstName}', '${lastName}', '${email}', '${phoneNumber}', '${gender}' ) RETURNING *`);
        res.status(200).json(rows)
        console.log(rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// GET ALL PARENTS RECORD
const getAttendees = async (req, res) => {

    //Return all rows in DB
    try {
        const {rows} = await pgPool.query(`SELECT * FROM attendees`);
        res.status(200).json(rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    creatAttendee, getAttendees
}