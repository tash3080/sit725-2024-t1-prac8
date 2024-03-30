var express = require("express");
var app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tash3080:3tubXQHCmtOmcly0@cluster0.lifqhhb.mongodb.net/expressDatabase";

var port = process.env.port || 3000;

let collection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});


async function runDBConnection() {
    try {
        // // Connect the client to the server
        await client.connect();
        collection = client.db().collection('flowers');
        console.log('Connected to MongoDB!');
    } catch (ex) {
        console.error(ex);
    }
}

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


app.get('/api/mycardsprac4', async (req, res) => {
    try {
        const result = await getAllFlowers();
        res.json({ statusCode: 200, data: result, message: "Success" });
    } catch (err) {
        console.error(err);
    }
});


app.post('/api/flower', async (req, res) => {
    try {
        const flower = req.body;
        const result = await postFlower(flower);
        res.json({ statusCode: 201, data: result, message: 'success' });
    } catch (err) {
        console.error(err);
    }
});


app.listen(port, () => {
    console.log(`Express server started on port ${port}`);
    runDBConnection();
});