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

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({ message: 'Email ou mot de passe invalide'});
    }
    const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
}

exports.getAllUsers = async (req, res) => {
    const result = await pool.query('SELECT id, name, email FROM users');
    res.json(result.rows);
}

exports.updateUser = async (req, res) => {
    const {name, email } = req.body;
    const { id } = req.params;
    await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    res.json({message: 'Utilisateur modifié'});
}

exports.deleteUser = async (req, res) => {
    await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
    res.json({message: 'Utilisateur supprimé'});
}