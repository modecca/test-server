const express = require('express');
const cors = require('cors'); // Import the cors module

const app = express();

// Use the cors middleware
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/data', (req, res) => {
  res.json('Hello, Ku Calo!');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});