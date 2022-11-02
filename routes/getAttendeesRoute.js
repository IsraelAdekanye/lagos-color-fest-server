const express = require("express");
const { getAttendees } = require("../controllers/data_Point_Controller");

const router = express.Router();

router.get('/', getAttendees)

module.exports = router;