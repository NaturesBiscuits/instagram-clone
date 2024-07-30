import React, { useState } from 'react';
import "./Authenticate.css";
import Login from './Login';
import Signup from './Signup';

function Authenticate() {
  const [active, setActive] = useState("login")

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  }

  return (
    <div className="authenticate">
        <div className='auth__left'>
            <img src="https://media.voguebusiness.com/photos/60ae33319e6b5e325e60067c/2:3/w_1920,c_limit/instagram-likes-voguebus-instagram-may-21-story.gif" alt="Sample image"></img>
        </div>
        <div className='auth__right'>
          {active === "login" ? <Login /> : <Signup />}
            <div className='auth__more'>
                <span>
                {active === "login" ? (
                  <>
                  Don't have an account? <button onClick={handleChange}>Sign up</button>{""}
                  </>
                ) : (
                  <>
                  Have an account? <button onClick={handleChange}>Log in</button>
                  </>
                )}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Authenticate;