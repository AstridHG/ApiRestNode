var express = require('express')
var http = require('http')
var firebase = require('firebase');
var app = express()
const nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/app';

var formidable = require('formidable');
var FCM = require('fcm-node');
var serverKey="AAAAOR8fd4A:APA91bEfh7b5ya5KB8Xj5EIeCAe5AuYLzAsYUNajgvoyCSjBIWkDL03Q7fwwDKOfXIdUEzZ1U6dnojzqxdNgzPkWQIN20lt1QZWhVbUtAoe51uAfuc42Gejs7GiZ2QQl1jB3OTi1Faqk";
var fcm = new FCM(serverKey);
 
app.get('/', (req, res) => {
  res.status(200).send("Welcome to API REST")
})
 
http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});

var NodeWebcam = require( "node-webcam" );

var opts = {

    width: 1024,
 
    height: 720,
 
    quality: 100,
 
    delay: 0,
 
    saveShots: true,
 
    output: "jpeg",
 
    device: false,
 
    callbackReturn: "location",
 
    verbose: false
 
};
 
var Webcam = NodeWebcam.create( opts );

Webcam.capture( "test_picture", function( err, data ) {} );

NodeWebcam.capture( "test_picture", opts, function( err, data ) {
 
});

Webcam.list( function( list ) {
 
    var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
 
});
var opts = {
    callbackReturn: "base64"
};

const transport = nodemailer . createTransport ( {
    service : 'Gmail' , 
    auth : { 
        user : 'astrid1404hg@gmail.com' , 
        pass : 'edith142404' , 
    } 
} ) ;
const mailOptions = { 
    from: 'astrid1404hg@gmail.com' , 
    to: 'mauricio.vascos@gmail.com' , 
    subject: '¡te adoro!' , 
    html: '¡sos mi todo !' , 
	attachments: [{
		filename: 'test_picture.jpg',
		path: 'test_picture.jpg'
	}]
} ;
transport . sendMail ( mailOptions , ( error , info ) => {   
    if ( error ) {  
        console . log ( error ) ;
    }
    console . log ( `Mensaje enviado : $ { info . respuesta } ` ) ;
} ) ;

//FALTA BASE DE DATOS