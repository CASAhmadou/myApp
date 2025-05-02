const pool = require('../db');

exports.getTodos = async (req, res) => {
    const result = await pool.query('SELECT * FROM todos ORDER BY id DESC');
    res.json(result.rows);
}

exports.createTodo = async (req, res) => {
    const { todo } = req.body;
    const result = await pool.query('INSERT INTO todos (todo) VALUES ($1) RETURNING *', [todo]);
    res.status(201).json(result.rows[0]);
}

exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { todo, isDone } = req.body;
    await pool.query( 'UPDATE todos SET todo = $1, is_done = $2 WHERE id = $3', [todo, isDone, id]);
    res.json({ message: 'Todo mis à jour'})
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM todos WHERE id = $1', [id]);
    res.json({ message: 'Todo supprimé' })
}