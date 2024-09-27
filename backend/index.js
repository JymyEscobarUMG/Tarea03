const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let users = []; // Arreglo en memoria para almacenar los usuarios

// Ruta de registro
app.post('/register', (req, res) => {
    const { nombre, dpi, email, password } = req.body;

    // Verifica si el email ya existe
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'El email ya está registrado' });
    }

    // Añadir nuevo usuario al arreglo
    users.push({ nombre, dpi, email, password });
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

// Ruta de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Verifica si el usuario existe y las credenciales son correctas
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    res.status(200).json({ message: 'Login exitoso', user: { nombre: user.nombre, email: user.email } });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
