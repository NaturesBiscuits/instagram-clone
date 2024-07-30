import React, { useState } from 'react'
import "./Signup.css"
import { HandymanOutlined } from '@mui/icons-material';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
      signInWithEmailAndPassword(auth, email, password).then(
        updateProfile(auth.currentUser, {displayName: username})
      );
  })
    .catch(err => {
      alert(err);
    });
  };

  return (
    <div className='signup'>
        <img src='https://www.bkomstudios.com/wp-content/themes/bkom/assets/img/interface/logo-Instagram.png'
        alt='Logo'></img>

        <input onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder='Email'
        value={email}
        />
        <input onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder='Username'
        value={username}
        />
        <input onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder='Password'
        value={password}
        />
        <button onClick={handleSignup}>Sign up</button>
    </div>
  )
}

export default Signup;