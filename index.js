require('dotenv').config();
const express=require('express');
const bodyParser = require('body-parser');

const cors=require('cors');
const nodemailer = require('nodemailer');

const app=express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const PORT=5000;


const transporter = nodemailer.createTransport({
    service: 'Gmail', // Update this with your email service provider (e.g., 'Gmail', 'Outlook')
    auth: {
      user: 'monganitin60@gmail.com', // Replace with your email address
      pass: 'gill7788' // Replace with your email password or an application-specific password
    }
});

// Email details
const mailOptions = {
    from: 'monganitin60@gmail.com', // Replace with your email address
    to: 'chiragmahajan9019@gmail.com', // Replace with the recipient's email address
    subject: 'Test Email', // Replace with the email subject
    text: 'This is a test email sent from Node.js using Nodemailer.' // Replace with the email content
};


app.listen(PORT,()=>{
    console.log('server is running');
});

app.get('/',(req,res)=>{
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.log('Error:', error);
        } else {
        console.log('Email sent:', info.response);
        }
    });

    res.send('connected');
});
