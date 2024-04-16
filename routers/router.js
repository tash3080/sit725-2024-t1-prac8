var express = require("express");
let router = express.Router();
let controller = require('../controllers/controller');


router.get('/', async (req, res) => {
    controller.getAllFlowers(req, res)
});


router.post('/', async (req, res) => {
    controller.getAllFlowers(req, res)
});

module.exports = router;