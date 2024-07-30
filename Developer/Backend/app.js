

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Yash@2002',
//   database: 'signpdb'
// });

// db.connect(err => {
//   if (err) {
//     console.error('Database connection failed:', err);
//     return;
//   }
//   console.log('Connected to database.');
// });

// app.post('/signup', async (req, res) => {
//   console.log("Working......");
//   const { fullName, email, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
//       if (err) {
//         console.error('Error checking user existence:', err);
//         return res.status(500).send('Server error');
//       }
//       if (results.length > 0) {
//         return res.status(400).send('User already exists');
//       }

//       db.query('INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)', [fullName, email, hashedPassword], (err) => {
//         if (err) {        
//           console.error('Error inserting user:', err);
//           return res.status(500).send('Server error');
//         }
//         res.status(200).send('User registered successfully');
//       });
//     });
//   } catch (error) {
//     console.error('Error hashing password:', error);
//     res.status(500).send('Server error');
//   }
// });

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
//     if (err) {
//       console.error('Error fetching user:', err);
//       return res.status(500).send('Server error');
//     }

//     if (results.length > 0) {
//       const user = results[0];

//       const match = await bcrypt.compare(password, user.password);

//       if (match) {
//         res.send('Login successful!');
//       } else {
//         res.send('Invalid email or password.');
//       }
//     } else {
//       res.send('Invalid email or password.');
//     }
//   });
// });



const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRouter = require('./routes/auth');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs'); // Use bcryptjs

const app = express();
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('med');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/Offers', (req, res) => {
  res.render('offers');
});


app.get('/accu-check', (req, res) => {
  res.render('accubox');
});

app.get('/Virginiaa', (req, res) => {
  res.render('virginia');
});

app.get('/Omnigel', (req, res) => {
  res.render('omni');
});

app.get('/Chocolate', (req, res) => {
  res.render('chocolate');
});

app.get('/Drmorepen', (req, res) => {
  res.render('Drmorepen');
});

app.get('/Durex', (req, res) => {
  res.render('durex');
});

app.get('/Volini', (req, res) => {
  res.render('volini');
});

app.get('/Kamasutra', (req, res) => {
  res.render('kamasutra');
});

app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
