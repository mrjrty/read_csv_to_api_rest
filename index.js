import express from 'express';
import csv from 'csv-parser';
import fs from "fs";
import decompress from 'decompress';


const app = express()

//ROTA para descompressão do ZIP do ODA colocando na pasta /zip
app.get("/decompress", function (req, res) {
    decompress("./winzipteste.zip", "zip")
        .then((files) => {
            res.send(200)
        })
        .catch((error) => {
            res.send(500)
        });
})





app.get("/", function (req, res) {


    var createJson = [];

    fs.createReadStream('./file_read.csv')
        .pipe(csv())
        .on('data', function (data) {
            try {
                //If we want to print all the csv data we can print the (date) field. 
                //He is responsible for having all the data in our CSV. If we want to access any column of our CSV, just type data.columnname
                console.log(data)
                //console.log("FIRST_COLUMN1: " + data.FIRST_COLUMN1);
                //console.log("FIRST_COLUMN2: " + data.FIRST_COLUMN2);
                //console.log("FIRST_COLUMN3: " + data.FIRST_COLUMN3);
               
                
                //create array in JSON Format for our API REST
                createJson.push({ 'FIRST_COLUMN1': data.FIRST_COLUMN1, 'FIRST_COLUMN2': data.FIRST_COLUMN2, 'FIRST_COLUMN3': FIRST_COLUMN3 });
               
            }
            catch (err) {
                //error handler
            }

        })
        .on('end', function () {

            var jsoncompleto = JSON.stringify(createJson)
            res.send(JSON.stringify(jsoncompleto))
        });

});


app.listen(8031, function () {
    console.log("Servidor está rodando")
})
