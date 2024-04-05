import React, { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CardMedia, Chip, Stack, Typography, styled } from "@mui/material";
import  {ExpandMore, School, CheckBoxOutlined, CheckBoxOutlineBlank} from '@mui/icons-material';
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";
const StyledBox = styled(Box)({
  borderRadius: "10px",
  boxShadow: "0 2px 5px #cbcbcb",
});
import "./prevStyle.css"
const Preview = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [subjectId,setSubjectId] = useState(location.pathname.split("/")[2])
  const [themesState,setThemesState] = useState([])
  const [subjectState,setSubjectState] = useState([])


  useEffect(()=>{
    const apiUrlT = `/api/themes/${subjectId}`;
    const apiUrlS = `/api/subject/${subjectId}`;
    axios.get(apiUrlT).then((resp) => {
      const allThemes = resp.data.data;
      // console.log(resp.data)
      setThemesState(allThemes);
    });
    axios.get(apiUrlS).then((resp) => {
      const Subject = resp.data.data;
      // console.log(resp.data)
      setSubjectState(Subject);
    });
  },[])

  return (
    <>
      {subjectState.map(el1 => (
        <Stack key={el1.id} flex={7} gap={2} mt={3}>

        <StyledBox p={2}>
        <CardMedia
        
        sx={{ 
            height: 250,
            borderRadius: "10px"
        }}
        image={`http://localhost:8080/images?id=${el1.image}`}
        title="green iguana"
      />

          <Typography color="primary" variant="h3">
            {el1.title}
          </Typography>
          <Stack mt={1} direction="row" gap={0.5}>
            <Chip size="small" variant="outlined" label="html" />
            <Chip size="small" variant="outlined" label="css" />
            <Chip size="small" variant="outlined" label="javascript" />
          </Stack>
        </StyledBox>
        <StyledBox p={2}>
          <Typography color="primary" variant="h5">
            О курсе
          </Typography>
          <Stack mt={1} direction="row" gap={1}>
            <Typography variant="body1">
            {el1.description}
            </Typography>
          </Stack>
        </StyledBox>
        <StyledBox p={2}>
          <Typography color="primary" variant="h5">
            Содержание курса
          </Typography>
          <Stack mt={1} direction="column" gap={1}>
  
            {themesState ?
            themesState.map(el => (
            <Accordion key={el.id} sx={{boxShadow: 'none'}} disableGutters>
              <AccordionSummary   
                  
                expandIcon={<ExpandMore color="primary"/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
  
                <Typography>{el.title}</Typography>
              </AccordionSummary>
              <AccordionDetails >
                <Typography>
                {el.description}
                </Typography>
                <Button onClick={()=>navigate(`/subjects/${el1.id}/${el.id}`)}  sx={{mt:1}} size="small" color="primary" variant="outlined">
                <School/>
                </Button>
              </AccordionDetails>
            </Accordion>
            )) :
              <p>Загрузка...</p>
            }
  
            
  
  
          </Stack>
        </StyledBox>
      </Stack>
      ))}
    </>
    
    
  );
};

export default Preview;
