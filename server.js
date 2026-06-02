const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// GET - Home page
app.get('/', (req, res) => {
  res.render('index');
});

// POST - Contact form
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Submitted:', { name, email, message });
  res.redirect('/?success=true');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});