let collection = require('../models/flower');

const getAllFlowers = async (req,  res) => {
    try {
        const result = await collection.getAllFlowers();
        res.json({ statusCode: 200, data: result, message: "Success" });
    } catch (err) {
        console.error(err);
    }
}

const postFlower = async (req, res) => {
    try {
        const flower = req.body;
        const result = await collection.postFlower(flower);
        res.json({ statusCode: 201, data: result, message: 'success' });
    } catch (err) {
        console.error(err);
    }
}

module.exports = {postFlower, getAllFlowers}