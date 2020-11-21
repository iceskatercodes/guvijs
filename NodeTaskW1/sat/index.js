/**
 * Created on 08 NOV 2020
 * Created By Aravind
 */
const express = require('express')
const fs = require('fs');
const utils = require('./utils/utils')


const app = express()
app.use(express.json())
app.listen(3000, () => console.log(`your port is running on port: 3000`))

/**
 * This route is for health check
 */
app.get('/', (req, res) => {
    res.send('Hello from ping')
})

app.get ("/home",(req,res)=>{
    const testFolder = './images/';
    const fs = require('fs');
    let arr =[ ]
    fs.readdirSync(testFolder).forEach(file => {
      arr.push(file)
    });
    res.send({'filenames':arr})
}); 