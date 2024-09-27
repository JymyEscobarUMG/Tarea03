import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/registro.css';

export const Register = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        dpi: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await axios.post(import.meta.env.VITE_URL_API + '/register', formData);

            console.log(respuesta.data);
            navigate('/login');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="container">
            <h2>Registro</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>DPI</label>
                    <input type="text" name="dpi" className="form-control" value={formData.dpi} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>

                <button type="button" className="btn btn-secondary mt-2" onClick={() => { navigate('/Login') }}>Login</button>

            </form>
        </div>
    );
}
