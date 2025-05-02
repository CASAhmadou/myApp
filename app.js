require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', userRoutes);
app.use('/todos', todoRoutes)

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
})