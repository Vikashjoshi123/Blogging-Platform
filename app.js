const express = require('express');
const cors = require('cors');

const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
