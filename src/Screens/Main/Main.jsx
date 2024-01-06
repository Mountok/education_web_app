import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import SubjectCard from '../../Components/SubjectCard'

const Main = () => {
  return (
      <Box mt={3} flex={7} gap={5} sx={{
        
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'flex-start'
      }}>
        {/* subtitle max length = 110 sybols  */}
        <SubjectCard title='Веб-разработка' subtitle='
        Процесс создания веб-сайта или веб-приложения.
        Основными этапами процесса являются: веб-дизайн, 
        вёрстка страниц.
        '/>

        <SubjectCard title='Базы данных SQL' subtitle='
        Процесс создания веб-сайта или веб-приложения. 
        Основными этапами процесса на стороне клиента и сервера.
        '/>

        
      </Box>
  )
}

export default Main