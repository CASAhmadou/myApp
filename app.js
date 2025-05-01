const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('API Node.js OK');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Serveur démarré sur le port ${PORT}');
})