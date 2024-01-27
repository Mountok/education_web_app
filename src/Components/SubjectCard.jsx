import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {School} from '@mui/icons-material'
import { Avatar, Button, CardHeader, Collapse, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const SubjectCard = ({id,image,title,subtitle}) => {
  const navigate = useNavigate()
  return (
    <Card sx={{width: 345}}>
      <CardMedia
        
        sx={{ 
            height: 140,
            
        }}
        image={`${image}`}
        title="green iguana"
      />
      <CardContent sx={{paddingBottom: 0}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingTop: 0}}>
        <Button onClick={() => navigate('/subjects/1')} variant='contained'  color='primary' size="small" endIcon={<School/>} >Начать</Button>
      </CardActions>
    </Card>
    
  )
}

export default SubjectCard