// const url = 'mongodb+srv://soumyasri2245:Soumya22%4034@cluster0.u2ywt3o.mongodb.net/?retryWrites=true&w=majority'

// Import the MongoClient module from the mongodb library
const MongoClient = require('mongodb').MongoClient;

// Define the connection URL for the MongoDB database to connect to
const url = 'mongodb+srv://vaishaleeSen:SoMBeuHLrc6PGhCE@cluster0.jj1ckxm.mongodb.net//?retryWrites=true&w=majority';

// Define an asynchronous function that establishes a connection to the MongoDB database and returns a collection
async function getEmpData() {
    // Use the MongoClient to connect to the MongoDB database using the URL
    let client = await MongoClient.connect(url);
    // Access the 'issueTracker' database in the MongoDB cluster
    let connection = client.db('issueTracker');
    // Return a collection named 'IssueTracker2023' in the 'issueTracker' database
    return connection.collection('IssueTracker2023');
}

// Export the getEmpData function so it can be used in other files
module.exports = getEmpData;
