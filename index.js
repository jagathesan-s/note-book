const express = require('express');
const app=express();
const bodyparser=require('body-parser');
const path=require('path');
const exhbs=require('express-handlebars');
const mongoose=require('mongoose');
const user = require('./modules/storemodel');
let connection =false;
let portconnection =false;

app.engine('hbs',exhbs.engine({
        extname:'hbs',
        layoutsDir : path.join(__dirname,'views'),
        runtimeOptions:{
               allowProtoPropertiesByDefault:true,
               allowProtoMethodsByDefault:true
        }
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

mongoose.connect('mongodb+srv://sakthikumarask777:a1%40sakthi@notebook.9s0mjym.mongodb.net/?retryWrites=true&w=majority&appName=notebook')
.then(()=>{
        connection=true;
        console.log("connected");
}).catch((err)=>{
console.log("error");
connection=false;
});



app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'static')));


app.get('/',async (req,res)=>{

        if(!portconnection){
                return res.status(404).sendFile(path.join(__dirname,'/views/404.html'));
        }
        if(!connection){
                return  res.status(404).sendFile(path.join(__dirname,'/views/datanotfound.html'));
          }
          let data = await user.find({});
          res.render('main',{data});
        });

app.post('/',async(req,res)=>{
        if(req.body.title!='' && req.body.author!='' && req.body.description!=''){
                let Title=req.body.title;
                let Author=req.body.author;
                let Description=req.body.description;
        user_detail=new user({
                title: Title,
                author:Author,
                description:Description
        })
        
         await user_detail.save();
        return res.redirect('/');
        }
});

app.get('/delete_book',async(req,res)=>{
        let id = req.query.delete_book;
        await user.deleteOne({_id:id});
        res.redirect('/');
})
app.use((req,res)=>{
        res.sendFile(path.join(__dirname,'/views/404.html'));
})

app.listen(8000,()=>{
        portconnection=true;
});