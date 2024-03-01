import styled from '@emotion/styled';
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./course.css"



const StyledBox = styled(Box)({
    borderRadius: "10px",
    boxShadow: "0 2px 5px #cbcbcb",
});


const Course = () => {
  function createMarkup() {
    return {__html: `
    <h1 class="header_c" >Hello world</h1>
    <p class="text_c">
    Привет друзья добро пожаловать на первый урок по изучению языка текстовой разметки html.
    </p>
    <code class="code_c">
      <p>console.log("hello")</p>
      <p>console.log("hello")</p>
      <p>console.log("hello")</p>
      <p>console.log("hello")</p>
    </code>
    
    `};
  }
  
  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
  return (
    <Stack flex={7} gap={2} mt={3}>
    <StyledBox p={2}>
      <Typography color="primary" variant="h5">
        Название главы
      </Typography>
      <Stack mt={1} direction="column" gap={1}>
          <MyComponent/>
      </Stack>
      <Stack mt={1} direction="column" gap={1}>
        <Button variant='contained' >Продолжить</Button>
      </Stack>
    </StyledBox>
    
  </Stack>
  )
}

export default Course