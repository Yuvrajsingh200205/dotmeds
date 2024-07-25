const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRouter = require('./routes/auth');

const app = express();
app.set('view engine', 'ejs');
// app.set("views",path.resolve("./views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.render('med');
})

// Define a route for rendering the login page
app.get('/login', (req, res) => {
  res.render('login');
});

app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
