const express = require('express');
require('../controllers/index.js')

const router = express.Router();

router.get("/",getItem)
router.post("/",createItem)

module.exports= router;