const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser') 
const mysql = require('mysql2')

const app = express()


var db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'sendmail'
  })

db.connect(function(err) { 
    if(err){
        console.log('error' + err.stack);
        return
    }
    console.log('connected as id ' + db.threadId );
})

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b5f49874818f62",
      pass: "c194deee6445c0"
    }
});

app.listen(3000, function() {
    console.log('Server runing on port 3000');
})
