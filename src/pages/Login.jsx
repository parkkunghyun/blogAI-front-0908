import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../api/authApi'

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await loginUser({ username, password })
            if (data.access) {
                localStorage.setItem('access_token', data.access)
                localStorage.setItem('refresh_token', data.refresh)
                navigate('/')
            } else {
                setError('Invalid crendentials')
            }
        } catch (error) {
            setError('An error occurred')
        }
    }
    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;