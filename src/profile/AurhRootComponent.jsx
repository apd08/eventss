import React, { useState } from 'react'
import {Box} from '@mui/material'
import {useLocation} from 'react-router-dom'

import Login from './Login'
import Register from './Register'

const AuthRootComponent = () => {
    const [email, setEmail] = useState(''); //для хранения email и пароля
    const [password, setPassword] = useState('');
    const location = useLocation();

    const handleSubmit = async(e) =>{ //preventDefault - функция, котрая ничего не возвразает; : {preventDefault: () => void;}
        e.preventDefault();
        console.log(email);
    }

  return (
    <div className='root' id='root'>
        <form className="form" onSubmit={handleSubmit}>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                maxWidth={640}
                margin='auto'
                padding={5}
                borderRadius={5}
                boxShadow={'5px 5px 10px #ccc'}
            >
                {location.pathname === '/login' ? <Login setEmail={setEmail} setPassword={setPassword}/> : location.pathname === '/register' ? <Register/>  : null}
            </Box>
        </form>
    </div>
  )
}

export default AuthRootComponent