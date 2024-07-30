import React, { useState } from 'react';
import "./Login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
    }
  return (
    <div className="login">
        <img src='https://www.bkomstudios.com/wp-content/themes/bkom/assets/img/interface/logo-Instagram.png'
        alt='Logo'></img>
        <input onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        placeholder='Email'
        />
        <input onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        placeholder='Password'
        />
        <button onClick={handleLogin}>Log in</button>
    </div>
  )
}

export default Login