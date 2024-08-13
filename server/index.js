const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require('./model')
const jwt = require("jsonwebtoken");
const cors = require('cors');
const app = express();
const middleware = require('./middleware');

//------connecting mongoDB 
mongoose.connect("mongodb+srv://murali:kkkk123@cluster0.285owmp.mongodb.net/mongooseproject").then(
    () => console.log("MongoDB connected...")
)
//------- body parser
app.use(express.json());

app.use(cors({origin:"*"}));
//-----crud oparations
app.get('/',(req,res) =>{
    res.send(`<h1>Default Route screen</h1>`) 
})
app.post('/register',async(req,res) =>{
    try{
        const {UserName,Email,Password,Mobile} = req.body;
        let exist = await Registeruser.findOne({Email})
        if(exist){
            return res.status(400).send('User Alredy Exist')
        }
        let newUser = new Registeruser({
            UserName,
            Email,
            Password,
            Mobile
        })
        await newUser.save();
        res.status(200).send('Register successfully')
    }
    catch(err){
        console.log(err) 
        return res.status(500).send('Internal Server Error')
    }
})
   

app.post('/login',async(req,res) =>{
    try{
        const {Email,Password} = req.body;
        let exist = await Registeruser.findOne({Email});
        if(!exist){
            return res.status(400).send('User Not Exist in our database')
        }
        if(exist.Password !== Password){
            return res.status(400).send('Password not marching..')
        }
        let payload = {
            user:{
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
            (err,token) =>{
                if(err) throw err;
                return res.json({token})
            }
        )
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error while getting login...')
    }
})

app.get('/myprofile',middleware,async(req,res) =>{
    try{
        let exist = await Registeruser.findById(req.user.id)
        if(!exist){
            return res.status(400).send('User Not found while verify token')
        }
        res.json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('invalid error Server Error while getting my profile..')
    }
})

app.listen(2021,()=>{ 
    console.log('Server running... : http://127.0.0.1:2021') 
})   