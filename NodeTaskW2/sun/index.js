/**
 * Created By Aravind
 * 22/11/2020
 */

const express = require('express')
require('dotenv').config()
const mongodb = require("mongodb");
const mongoClient = require('mongodb').MongoClient;
const port = process.env.port || 3000
const cors = require('cors')
const version = '0.0.1'

const app = express()
app.use(express.json())
app.use(cors())
const objectId = mongodb.ObjectID;
dbUrl = 'mongodb://127.0.0.1:27017'
app.listen(port, () => console.log(`your port is running on port: ${port}`))

app.get('/health', async (req, res) => {
    let msg = `Hello from Version ${version}`
    res.status(200).json({ msg: msg })
})

