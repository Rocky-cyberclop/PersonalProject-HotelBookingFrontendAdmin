import { useState } from 'react';
import style from './Login.module.scss'
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({ username: '', password: '' })
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = () => {
        if(user.username.trim()==='')
        {
            toast.info('Username can not be blank!')
            return;
        }
        if(user.password.trim()==='')
        {
            toast.info('Password can not be blank!')
            return;
        }
        const login = async () => {
            try {
                const response = await axios.post(`http://localhost:8080/api/auth/admin`, user);
                // navigate('/chooseRoom', {
                //     state: {
                //         token: response.data,
                //         from: date.checkInDate,
                //         to: date.checkOutDate,
                //         room: room,
                //         adults: adults
                //     }
                // }) 
            } catch (error) {
                localStorage.setItem('admin', 'some string')
                navigate('/dashboard') 
                toast.success('Login successfully!')
                console.error('Error fetching data:', error);
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
                            name='username'
                            label='Username'
                            fullWidth
                            value={user.username}
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