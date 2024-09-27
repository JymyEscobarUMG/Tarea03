import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { UserContext } from '../UserProvider';
import '../css/Login.css';
import axios from 'axios';


export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(import.meta.env.VITE_URL_API)
            const respuesta = await axios.post(import.meta.env.VITE_URL_API + '/login', formData);
            console.log(respuesta);
            setUser(respuesta.data.user);

            navigate('/login/home');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>

                <button type="button" className="btn btn-secondary mt-2" onClick={() => { navigate('/register') }}>Registrar</button>
            </form>
        </div>
    );
}