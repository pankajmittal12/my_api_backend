const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://happiness:password1234@cluster0.69qyx.mongodb.net/';

const dbname = 'MyApi';

function main()
{
    try
    {
        const client = new MongoClient(url);
        const db = client.db(dbname);
        console.log("Successfully connected to MongoDB server");
        return db;
    } catch (err) {
        console.error("Error connecting to MongoDB server:", err);
    }
}

module.exports = { main };