import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
// useEffect


export default function LoginPage() {
  const [verified, setVerified] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory()

  const fetchAccount = () => {   
    console.log(username, password)

    fetch(`/login/${username}/${password}`) // Can't be root for some reason
      .then(res => res.json())
      .then(data => {
        console.log(data.verified)
        setVerified(data.verified) // Async
        
        if (data.verified) {
          history.replace('/create')
        }
      })
      .catch(console.error);
  }

  return (
    <div>
      <TextField onChange={(e) => setUsername(e.target.value)} label="username"/>
      <TextField onChange={(e) => setPassword(e.target.value)} label="password"/>
      <Button onClick={fetchAccount} >Login</Button>
      <p>{verified && "Login Verified"}</p>
    </div>
  );
}
