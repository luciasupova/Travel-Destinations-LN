const http = require('http');
const mongodb = require('mongodb').MongoClient

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 201;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Name Created');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// up there -- you are creating a server and connecting mongodb - you installed npm init, npm install http, npm install mongodb 

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nameDatabase')
.catch(error => console.log(error));

// up to this point -- you connected to mongoose and installed it with - npm install mongoose -- save

const Schema = mongoose.Schema;
const nameSchema= new Schema({ 
    name: String,
    address: String,
    email: String
});

 const Name = mongoose.model('Name',nameSchema);

 // up to this point you created a schema and a model

 Name.create({name: 'Lucia', address: 'DK', email: 'awesome@gmail.com'}, function (err, name) {
    if (err) return handleError(err);
  }); // here you use the model to create document in the database

