import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SubjectCard from '../../Components/SubjectCard'
import axios from 'axios'
const Main = () => {
  const [subjectsState,setSubjectsState] = useState([])

  useEffect(()=>{
    const apiUrl = '/api/subject';
    axios.get(apiUrl).then((resp) => {
      const allSubjects = resp.data.data;
      console.log(resp.data)
      setSubjectsState(allSubjects);
    });
  },[])

  return (
      <Box mt={3} flex={7} gap={3} sx={{
        
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'flex-start'
      }}>

        {/* subtitle max length = 110 sybols  */}

        {subjectsState.map(el => (
          <SubjectCard 
          id={el.id}
          key={el.id}
          image={"http://localhost:8080/images?id="+el.image}
          title={el.title}
          subtitle={el.description}
          />
        ))}
        

       
        
      </Box>
  )
}

export default Main