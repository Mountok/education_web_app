import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import SubjectCard from '../../Components/SubjectCard'

const Main = () => {
  return (
      <Box mt={3} flex={7} gap={3} sx={{
        
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'flex-start'
      }}>
        {/* subtitle max length = 110 sybols  */}
        <SubjectCard 
        image='https://avatars.mds.yandex.net/i?id=631c94619b8de748699d8e8caa9103a54dd8b857-10871821-images-thumbs&n=13' 
        title='Веб-разработка' 
        subtitle='
        Процесс создания веб-сайта или веб-приложения.
        Основными этапами процесса являются: веб-дизайн, 
        вёрстка страниц.
        '/>

        <SubjectCard 
        image='https://avatars.mds.yandex.net/i?id=d7d9ed631cb66f05cf694ecba7139aba09bdcada-10638416-images-thumbs&n=13' 
        title='Базы данных SQL' 
        subtitle='
        Процесс создания веб-сайта или веб-приложения. 
        Основными этапами процесса на стороне клиента и сервера.
        '/>

        
      </Box>
  )
}

export default Main