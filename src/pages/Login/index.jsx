/* eslint-disable */
import { useState } from 'react';
import style from './Login.module.scss'
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({ email: '', password: '' })
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = () => {
        if (user.email.trim() === '') {
            toast.info('Username can not be blank!')
            return;
        }
        if (user.password.trim() === '') {
            toast.info('Password can not be blank!')
            return;
        }
        const login = async () => {
            try {
                const response = await axios.post(`http://localhost:8080/api/auth/login`, user);
                if (response.data !== null) {
                    localStorage.setItem('admin', response.data);
                    toast.success('Login successfully!')
                    navigate('/dashboard')
                }
            } catch (error) {
                toast.error('Login failed! Something went wrong!')
                return;
            }
        };
        login();
    }

    return (
        <div className={style.container}>
            <div className={style.form}>
                <div className={style.header}>
                    <div className={style.title}>Sign In Admin</div>
                    <div className={style.description}>Enter admin username and password to Sign In.</div>
                </div>
                <div className={style.body}>
                    <div className={style.item}>
                        <TextField
                            name='email'
                            label='Username'
                            fullWidth
                            value={user.email}
                            onChange={handleInputChange} /></div>
                    <div className={style.item}>
                        <TextField
                            name='password'
                            type='password'
                            label='Password'
                            fullWidth
                            value={user.password}
                            onChange={handleInputChange} /></div>
                    <div className={style.item}><Button className={style.login} onClick={handleLogin}>Login</Button></div>
                </div>
            </div>
        </div>
    )
}

export default Login;