import React, {Fragment, useState} from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import {TextField, Button, Typography} from '@mui/material'
import {Box} from '@mui/material'



const Register = (props) => {

  const [email, setEmail] = useState(''); //для хранения email и пароля
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [repeatePassword, setRepeatePassword] = useState('');
  const location = useLocation();

  const handleSubmit1 = async(e) =>{ //preventDefault - функция, котрая ничего не возвразает; : {preventDefault: () => void;}
      e.preventDefault();
      console.log(name);
      console.log(username);
      console.log(email);
      console.log(password);
      console.log(repeatePassword);
  }

  return (
    /*убрать нахрен и поставить fragment*/
    <div className='root' id='root'>
        <form className="form" onSubmit={handleSubmit1}>
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
      <Typography variant='h2' padding={3} fontFamily='Popins' textAlign='center'>Регистрация</Typography>
      <Typography variant='body1' marginBottom={3} fontFamily='Popins' textAlign='center'>Введите данные для регистрации</Typography>
      <TextField fullWidth={true} margin='normal' label="Имя" variant="outlined" placeholder='Введите ваше имя' onChange={(e) => setName(e.target.value)}/>
      <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Введите ваш username' onChange={(e) => setUsername(e.target.value)}/>
       <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)}/>
       <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Введите ваш пароль'onChange={(e) => setPassword(e.target.value)}/>
       <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Повторите ваш пароль' onChange={(e) => setRepeatePassword(e.target.value)}/>

       <Button type='submit' sx={{fontFamily:'Popins', marginTop:2, width: '60%', marginBottom:2}} variant="contained">Регистрация</Button>
       <Typography variant='body1' sx={{fontFamily:'Popins'}}>У вас есть аккаунт? <Link to="login" className='inciting_text'>Авторизация</Link></Typography>
       </Box>
        </form>
    </div>
  )
}

export default Register