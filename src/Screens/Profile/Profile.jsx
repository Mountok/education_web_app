import { Avatar, Box, Button, Card, CardContent, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <Box gap={1} mt={3} flex={7} sx={{
        display: "flex",
        alignItems: "flex-start",
        flexWrap: "wrap"

    }}>
        <Box>
            <Card >
                <CardContent sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "205px",
                maxWidth: "545px",
            }}>
                    <Avatar alt="Admin"
                    sx={{ width: 100, height: 100 }}
                    />
                    <Typography mt={1} variant='h6'color="primary" >Admin</Typography>
                    <Typography variant='caption' color="primary">admin@example.com</Typography>
                    <Typography mt={1} color="primary"
                    sx={{width: "100%",textAlign:"left"}} 
                    variant='body1'>
                        Описание
                        </Typography>
                    <Typography mt={1} variant='body2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Veniam tenetur quod quis harum odit consectetur vero cum? 
                        Officiis, sint laboriosam.
                    </Typography>
                </CardContent>
            </Card>
            <TableContainer sx={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "innerhit",
                maxWidth: "innerhit",
                }} component={Paper}>
                <TableBody>
                    <TableRow>
                        <TableCell sx={{color: "primary.main"}}>Полное имя</TableCell>
                        <TableCell>Даушев Ислам Алиханович</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{color: "primary.main"}}>Почта</TableCell>
                        <TableCell>admin@example.com</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{color: "primary.main"}}>Телефон</TableCell>
                        <TableCell>+7 (928) 022-93-49</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{color: "primary.main"}}>Адрес</TableCell>
                        <TableCell>Россия, г.Грозный</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{color: "primary.main"}}>Образование</TableCell>
                        <TableCell>Среднее профессиональное</TableCell>
                    </TableRow>

                </TableBody>
            </TableContainer>
        </Box>
       
        <Box>
            User Stats
        </Box>
    </Box>
  )
}

export default Profile