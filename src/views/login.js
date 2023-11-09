import React, { useState } from 'react';
import './login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra định dạng email và mật khẩu có ít nhất 8 ký tự
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^.{8,}$/;

        if (emailRegex.test(email) && passwordRegex.test(password)) {
            setIsLoggedIn(true);
            setError('');
        } else if (!emailRegex.test(email) && !passwordRegex.test(password)) {
            setIsLoggedIn(false);
            setError('Invalid email or password. Please check your credentials.');
        } else if (!emailRegex.test(email)) {
            setIsLoggedIn(false);
            setError('Invalid email. Please check your credentials.');
        }
        else {
            setIsLoggedIn(false);
            setError('Invalid password. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
            {isLoggedIn && <p className="success">{email} has successfully logged in!</p>}
        </div>
    );
}

export default Login;