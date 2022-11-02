const express = require("express");
const { creatAttendee } = require("../controllers/data_Point_Controller");

const router = express.Router();

router.post('/', creatAttendee);

module.exports = router;

