import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';


const initialCreds = {username: '', password: ''}

const Login = (props) => {

    const [creds, setCreds] = useState(initialCreds);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("loginSubmitted");
        axios.post('http://localhost:5000/api/login', creds)
            .then(resp => {
                localStorage.setItem('token', resp.data.payload);
                history.push('/friendslist');
            })
            .catch(err => {
                console.error(err);
            })
            .finally(setIsLoading(false))

    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }


    return(
        <div className="loginform">
            <h3>LOGIN</h3>
            {isLoading && <h4>is loading now</h4>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={creds.username}
                    onChange={handleChange}
                    placeholder="username"
                />
                <input
                    type="password"
                    name="password"
                    value={creds.password}
                    onChange={handleChange}
                    placeholder="password"
                />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default Login;