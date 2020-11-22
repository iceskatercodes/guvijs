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

app.post('/mentor', async (req, res) => {
    let p = req.body
    if(p.email){
        let sa = p.email.split('@')
        if (sa[1] != 'guvi.in') {
            res.status(400).json({msg:'only guvi employee are supposed to be added'})
            return ErrorMsg('')
            // return ErrorMsg('ok, u want to play with me with wrong credentials????')
        }
    }
    else{
        let client = await mongodb.connect(dbUrl);
        let db = client.db("B15_WE");
        let emailCheck = await db.collection('mentors').findOne({'email':p.email})
        if (emailCheck) {
            res.status(400).json({ msg: "mentor with this details exist" })
        }
        else {
            let result = await db.collection("mentors").insertOne(p);
            res.status(200).json({ msg: "mentor Created" });
        }
        client.close();
    }
    
})

app.get('/mentor', async (req, res) => {
    try {
       let client = await mongodb.connect(dbUrl);
        let db = client.db("B15_WE");
        let result = await db.collection("mentors").find().toArray();
        res.status(200).json({ msg: "mentors list", mentors: result });
        client.close();
    } catch (error) {
        console.log(error)
        res.send(500)
    }

})

app.post('/users', async(req,res)=>{
    let p = req.body
    if(p.email){
        let sa = p.email.split('@')
        if (sa[1] == 'guvi.in') {
            res.status(400).json({msg:'only guvi employee can not be users'})
            return ErrorMsg('')
            // return ErrorMsg('ok, u want to play with me with wrong credentials????')
        }
    }
    else{
        let client = await mongodb.connect(dbUrl);
        let db = client.db("B15_WE");
        let emailCheck = await db.collection('users').findOne({'email':p.email})
        if (emailCheck) {
            res.status(400).json({ msg: "user with this email registered" })
        }
        else {
            let result = await db.collection("users").insertOne(p);
            res.status(200).json({ msg: "user Created" });
        }
        client.close();
    }
   
})

app.get('/users', async (req, res) => {
    try {
        let client = await mongodb.connect(dbUrl);
        let db = client.db("B15_WE");
        let result = await db.collection("users").find().toArray();
        res.status(200).json({ msg: "users list", users_list: result });
        client.close();
    } catch (error) {
        console.log(error)
        res.send(500)
    }

})

app.put('/assign_mentor',async(req,res)=>{
    try {
        let p = req.body
        let client = await mongodb.connect(dbUrl);
        let db = client.db("B15_WE");
        let user = await db.collection("users").findOne({_id:mongodb.ObjectID(p.userId)});
        let mentor = await db.collection("mentors").findOne({_id:mongodb.ObjectID(p.mentorId)});
        if(user && mentor){
            let r = await db.collection('users').findOneAndUpdate({_id:mongodb.ObjectID(p.userId)},{$set:{mentor_id:p.mentorId}})
            res.status(200).json({ msg: "assigned mentor" });
            client.close();
        }
        else{
            res.status(200).json({ msg: "unable to assign mentor" });
        }
        
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})