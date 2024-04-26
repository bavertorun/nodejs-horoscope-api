require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.use('/api/horoscope/',require('./routes/horoscope'));


app.listen(PORT,()=>{
    console.log(`Lİstening on port ${PORT}`);
})

