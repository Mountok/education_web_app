import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LinkMui from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from "axios"
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var redirect = true
    if (location.pathname == '/registration') {
      console.log("reg logic")
      const req = await  axios.post('/api/reg', {
        id: 0,
        email: data.get('email'),
        password: data.get('password'),
        create_date: ""
      }).then(function (response) {
        console.log(response);
        localStorage.setItem("LEARN_GGKIT_USER_ID",response.data.data)
      }).catch(function (error) {
        console.log(error);
        redirect = false
        alert(error.response.data.split("\"")[3])
      });
    

    } else {
      console.log("log in logic")
      const req = await  axios.post('/api/auth', {
        id: 0,
        email: data.get('email'),
        password: data.get('password'),
        create_date: ""
      }).then(function (response) {
        console.log(response);
        localStorage.setItem("LEARN_GGKIT_USER_ID",response.data.data)
      }).catch(function (error) {
        console.log(error);
        redirect = false
        alert(error.response.data.data)
      });
    }

    redirect ? navigate('/home') : null
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          margin: '30% auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {location.pathname == '/registration' ? 'Регистрация' : 'Вход'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            color='primary'
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder='example@email.com'
          />
          <TextField
            color='primary'
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            color='primary'
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {location.pathname == '/registration' ? 'зарегистрироваться' : 'войти'}
          </Button>
          <Grid container>
            <Grid item>
              <LinkMui variant='body2'>
                <Link style={{ color: 'black' }} to={location.pathname == '/registration' ? '/' : '/registration'}>
                  {location.pathname == '/registration' ? "Есть аккаунт? Войдите" : "Нету аккаунта? Создайте"}
                </Link>
              </LinkMui>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Login