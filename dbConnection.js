const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tash3080:3tubXQHCmtOmcly0@cluster0.lifqhhb.mongodb.net/expressDatabase";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

client.connect();

module.exports = client;