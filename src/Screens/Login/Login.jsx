import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkMui from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
        if (location.pathname == '/registration') {
          console.log("reg logic")
        } else {
          console.log("log in logic")
        }
        navigate('/home')
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
              {location.pathname == '/registration' ? 'зарегистрироваться' :'войти' }
            </Button>
            <Grid container>
              <Grid item>
                <LinkMui variant='body2'>
                  <Link style={{color: 'black'}} to={location.pathname == '/registration' ? '/' : '/registration'}>
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