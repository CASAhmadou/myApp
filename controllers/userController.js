const pool = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    await pool.query(
        'INSERT INTO users(name, email, password) VALUES ($1, $2, $3)',
        [name, email, hashed]
    );
    res.status(201).json({ message: 'Utilisateur créé' });
}

exports.login = 