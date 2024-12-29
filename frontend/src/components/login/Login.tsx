import { useState } from 'react';
import api from '../../services/api.ts';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target as HTMLInputElement;
        setFormData({ ...formData, [id]: value });
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await api.post('auth/login', formData);
            alert('Login successful. Token: ' + data.token);
            // Save token in localStorage and redirect user
            localStorage.setItem('token', data.token);
        } catch (err) {
            setError((err as { response?: { data?: { message?: string } } }).response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="image-container">
                <img src="../../assets/bright_room.jpg" alt="" />
            </div>
            <div className="container">
                <h1 className="main-title">Expense Tracker</h1>
                <h3 className="title">Login to your account</h3>
                <form onSubmit={handleLogin} className="form">
                    <div className="input-group">
                        <label className="label" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label className="label" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="input"
                            required
                        />
                    </div>
                    <a className="anchor-text">Forgot password</a>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="button" style={{ margin: '10px 0px' }}>
                        Login
                    </button>

                    <div className="register-text">
                        <p>Dont have an account?</p>
                        <Link to="/register" className="anchor-text">
                            <b>Signup</b>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
