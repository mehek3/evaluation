import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Component/AuthContext";
import axios from 'axios';
import { useNavigate }from 'react-router-dom';

const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState(null);
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.PreventDefault();
        try {
            const response = await axios.post('https:// api.example.com/login',{
                email,
                password,
            })
            const{token,email} = response.data;
            login(token,email);
            navigate('/')
        }catch (error){
            setError (error.message);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                autoFocus
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
                />
                <button type="Submit"> Login</button>
                {error && <div style={{color: 'red'}}>{error}</div>}
            </form>
        </div>
    );
};
export default Login;