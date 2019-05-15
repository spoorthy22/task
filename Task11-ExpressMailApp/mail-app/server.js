var express = require('express');
var path = require('path');
var nodeMailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var port = 8080;

app.get('/', function (req, res) {
      res.render('index');
    });

app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'spoorthy.1rn14ec146@gmail.com',
              pass: 'RVPersie-20'
          }
      });

      let mailOptions = {
          from: '"spoorthy" <spoorthy.1rn14ec146@gmail.com>',
          to: req.body.to,
          subject: req.body.subject,
          text: req.body.body,
          //html: '<b>NodeJS Email</b>',
          //attachments: [{ path: '/home/costrategix/Pictures/gpay.png' }]
       };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
      });
});

app.listen(port, function(){
    console.log('Server is running at port: ',port);
});
