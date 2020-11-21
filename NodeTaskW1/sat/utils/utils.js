/**
 * Created on 08 NOV 2020
 * Created By Aravind
 */
'use strict'
const fs = require('fs');
let utils = {}

/**
 * to filter all files from a folder
 */
utils.getFilesFromDirectory = (dir)=> {
    let resp = { error: false }
    let arr = []
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log(err)
            resp.error = true
            resp.data = err
        }
        files.forEach(file => {
            let fileDate = {
                fileName: file
            }
            arr.push(fileDate)
        });
        resp.data = arr
        return resp
    });
}

module.exports = utils