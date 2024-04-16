let client = require('../dbConnection');

let collection = client.db().collection('flowers');

async function getAllFlowers(callback) {
    try {
        const flowers = await collection.find({}).toArray(callback);
        console.log(flowers);
        return flowers;
    } catch (err) {
        console.error(err);
        throw err;
    }
}


async function postFlower(flower) {
    try {
        const result = await collection.insertOne(flower);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {postFlower, getAllFlowers};