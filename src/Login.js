import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';

function Login() {

  const signIn = () => {
    auth.signInWithPopip(provider).catch( (error) => alert(error.message) );
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="./img/logo" alt="imessage logo"/>
        <h1>IMessage</h1>
      </div>
      <Button onClick={ signIn }>Sign in</Button>
    </div>
  );
}

export default Login;
