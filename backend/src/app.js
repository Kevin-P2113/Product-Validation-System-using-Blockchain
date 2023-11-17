import express from 'express';
import blockchain from './ledger/router';
import bodyParser from 'body-parser';
var cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.send('connected');
})

app.use('/blockchain', blockchain)

export default app;