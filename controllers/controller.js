let collection = require('../models/flower');

const postFlower = async (req, res) => {
    try {
        const flower = req.body;
        const result = await collection.postFlower(flower);
        res.json({ statusCode: 200, data: result, message: 'Successful' });
    } catch (err) {
        console.error(err);
    }
}

const getAllFlowers = async (req,  res) => {
    try {
        const result = await collection.getAllFlowers();
        res.json({ statusCode: 200, data: result, message: "Successful" });
    } catch (err) {
        console.error(err);
    }
}

module.exports = {postFlower, getAllFlowers}