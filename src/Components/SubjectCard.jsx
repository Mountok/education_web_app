import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {School} from '@mui/icons-material'
import { Avatar, Button, CardHeader, Collapse, IconButton } from '@mui/material';
const SubjectCard = ({id,image,title,subtitle}) => {
  return (
    <Card sx={{width: 345}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  color='secondary' size="small" endIcon={<School/>} >Начать</Button>
      </CardActions>
    </Card>
    
  )
}

export default SubjectCard