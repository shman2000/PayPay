const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//CORS
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  } 
  next();
});

//I would add backed structure, separate it into modules
//also add support for dev, staging and production env

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://paypay:oxPHfd8Xlulteu4H@cluster0.ckryo.mongodb.net/paypay?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const db = client.db('paypay')

    app.get('/employees', (req, res) => {
        
        db.collection('employees').find().toArray()
        .then(results => {
            console.log(results)
            res.json(results);
        })
        .catch(error => console.error(error))

    })

    app.post('/addEmployee', (req, res) => {

        console.log(req.body)
        
        db.collection('employees').insertOne(req.body)
        .then(results => {
            console.log(results)
            res.json("ok");
        })
        .catch(error => console.error(error))

    })

    app.get('/reviews', (req, res) => {
        
        db.collection('reviews').find().toArray()
        .then(results => {
            console.log(results)
            res.json(results);
        })
        .catch(error => console.error(error))

    })


    //handle that on exit or exception...
    //client.close();
});



app.listen(8001, function() {
    console.log('listening on 8001')
})