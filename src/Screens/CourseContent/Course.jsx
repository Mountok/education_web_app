import styled from '@emotion/styled';
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./course.css"
import axios from "axios"
import { useLocation } from 'react-router-dom';


const StyledBox = styled(Box)({
    borderRadius: "10px",
    boxShadow: "0 2px 5px #cbcbcb",
});


const Course = () => {
  const [content,setContent] = useState([])
  const location = useLocation()

  useEffect(()=>{
    getContent()
    
    
  },[])

  const getContent = async () => {
    const apiUrl = `/api/lessons/${location.pathname.split('/')[2]}/${location.pathname.split('/')[3]}`;
    await axios.get(apiUrl).then((resp) => {
      const lessonContent = resp.data.data;
      setContent([lessonContent]);
    });
  }

  


  function createMarkup(str) {
    return {__html: str};
  }
  
  function MyComponent({str}) {
    return <div className='content' dangerouslySetInnerHTML={createMarkup(str)} />;
  }
  return (
    <>
     <Stack flex={7} gap={2} mt={1}>
    <StyledBox p={3}>

      {content.map(el => (
        <Stack key={el.id} mt={0} direction="column" p={1} gap={1}>
        <MyComponent str={el.upkeep}/>
        </Stack>
      ))}
      
      <Stack mt={1} direction="column" gap={1}>
        <Button variant='contained' >Продолжить</Button>
      </Stack>
    </StyledBox>
    
  </Stack>
    </>
    
  )
}

export default Course