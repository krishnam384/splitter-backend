const express = require('express');
const app = express();
require('dotenv').config();
require('./DB/connectDB');
const User = require('./models/users');
const createUser = require('./routes/createUser');
const createGroup = require('./routes/createGroup');
const createBill = require('./routes/createBill');
app.use(express.json());

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requeste-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/v1/users',createUser);

app.use('/api/v1/groups',createGroup);

app.use('/api/v1/bills',createBill);

// app.post('/test',(req,res)=> {
//     console.log(req.body.username);
//     res.send("data reached")
//     // const {username,email,password,phone} = req.body;
//     // res.send(`Username:${username} Email: ${email} Password: ${password} Phone: ${phone}`);

// })

const port = process.env.PORT;
app.listen(port,()=>{console.log(`Server is Listening on port..${port}`)});

