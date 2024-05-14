import React, {Fragment, useState} from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import {TextField, Button, Typography} from '@mui/material'
import {Box} from '@mui/material'

const Login = (props) => {
 
  const [email, setEmail] = useState(''); //для хранения email и пароля
  const [password, setPassword] = useState('');
  const location = useLocation();

  const handleSubmit = async(e) =>{ //preventDefault - функция, котрая ничего не возвразает; : {preventDefault: () => void;}
      e.preventDefault();
      console.log(email);
      console.log(password);
  }

  return (
     /*убрать нахрен и поставить fragment*/
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
      <Typography variant='h2' padding={3} fontFamily='Popins' textAlign='center'>Авторизация</Typography>
      <Typography variant='body1' marginBottom={3} fontFamily='Popins' textAlign='center'>Введите ваш email и пароль</Typography>
       <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)}/>
       <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
       <Button type='submit' sx={{fontFamily:'Popins', marginTop:2, width: '60%', marginBottom:2}} variant="contained">Войти</Button>
       <Typography variant='body1' sx={{fontFamily:'Popins'}}>У вас нет аккаунта? <Link to='register' className='inciting_text'>Регистрация</Link></Typography>
       </Box>
        </form>
    </div>
  )
}

export default Login