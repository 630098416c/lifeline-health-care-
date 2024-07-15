const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
const jwt = require('jwt')
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./schema');

app.use(bodyParser.json)
app.use(express.static())

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('OOPs! Something broke');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const filetoStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./uploads`);
  },
  filename: async (req, file, cb) => {
      cb(null, filename);
    }
  },
);

const upload = multer({ storage: filetoStorageEngine })
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

mongoose.connect('mongodb://localhost:27017/end',{ useNewUrlParser: true, useUnifiedTopology: true })

db = mongoose.connection()

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', function() {
  console.log('Connected to MongoDB database.');
})

app.listen(3000,()=>{
    console.log('Port connected successfully')
})