const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const port = 8001;

// app.use(express.json())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.send("Connected to MongoDB Successfully✅");
  } else {
    res.send("Did not connect to MongoDB😔");
  }
});


// routes
app.use('/api', routes);


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected")
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => console.log("MongoDB connection error: ", err));