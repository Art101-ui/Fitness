const express = require('express')
const app = express();
const nodemailer = require('nodemailer');
const {EMAIL, PASSWORD} = require('./env')
var favicon = require('serve-favicon');
var path = require('path');

const PORT = process.env.PORT || 5000

// Middleware
app.use(express.static('public'));
app.use(express.json())



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/',(req,res)=>{
    console.log(req.body);

    let config={
        service:'gmail',
        auth:{
            user:EMAIL,
            pass:PASSWORD
            
        }
    }

    let transporter = nodemailer.createTransport(config);

    const mailOptions = {
        from: req.body.email,
        to:'obadmus912@gmail.com',
        subject:`Message from ${req.body.email}: ${req.body.subject}`,
        text:req.body.message
    };

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error')
        }else{
            console.log('Email Sent' + info.response)
            res.send('success');
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

// pass:'kvowmiaahpwvwzff'