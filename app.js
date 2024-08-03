const express = require('express');
const app=express();
const bodyparser=require('body-parser');
const path=require('path');
const mongoose=require('mongoose');
const user = require('./modules/storemodel')

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'static')));
app.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/',async(req,res)=>{
        user_detail=new user({
                title: req.body.title,
                author:req.body.author,
                description:req.body.description
        })
        
         await user_detail.save();
         res.sendFile(path.join(__dirname,'index.html'));
        }
        
)



mongoose.connect('mongodb+srv://sakthikumarask777:a1%40sakthi@notebook.9s0mjym.mongodb.net/?retryWrites=true&w=majority&appName=notebook').then(()=>{
        console.log("connected");
}).catch(()=>{
        console.log("not connected");
});

app.listen(8000);