console.log("starting!!");
const express = require('express');
const hbs = require('hbs');


var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use((req,res,next)=>{
  res.render('maintenance',{
    pageTitle:'maintenance going on',
    welcomeMessage:'Hang on, we will be back soon'
  });
  // next();
});

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});


app.get('/',(req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
  // res.send('<h1>Hello..</h1>');
});

app.get('/about',(req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
  // res.send('<h1>About page..</h1>');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.get('*',(req, res) => {
  res.send('<h1>page not found..</h1>');
});


app.listen(3000);
