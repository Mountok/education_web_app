import { Home } from '@mui/icons-material';
import { Button, ButtonGroup, Chip, Divider } from '@mui/material';
import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const SideBarButtons = ({isOpen}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = (event,path) => {
        event.preventDefault();
        navigate(path)
    }
    const menuBox = [
        {path:'/home',title: 'Домой', icon: <Home/>},
        {path:'/profile',title: 'Профиль',icon: <AccountBoxIcon/>},
      ];
      const menuEducationBox = [
        {path:'/subjects',title: 'Предметы', icon: <LocalLibraryIcon/>},
        {path:'/rating',title: 'Рейтинг',icon: <ThumbsUpDownIcon/>},
        {path:'/contacts',title: 'Обратная связь',icon: <ContactSupportIcon/>}
      ];
  return (
    <>
        <Divider  sx={{margin:'5px 0 10px 0'}}>
            <Chip color='primary'  size='medium' label='Меню'/>
        </Divider>
          {menuBox.map(el => 
            (
                <ButtonGroup 
                    
                    color='primary' 
                    sx={{width: '90%',margin: '4px auto'}} 
                    fullWidth 
                    variant={location.pathname === el.path ? 'contained' : 'outlined'}>
                        <Button onClick={(e) => handleClick(e,el.path)} sx={{width: '10%'}} size="small" >{el.icon}</Button>
                        <Button onClick={(e) => handleClick(e,el.path)} sx={{width: '90%'}} >{el.title}</Button>
                </ButtonGroup>
            )
          )}
        <Divider   sx={{margin:'10px 0'}}>
            <Chip color='primary' size='medium' label='Образование'/>
        </Divider>
        {menuEducationBox.map(el => 
            (
                <ButtonGroup 
                    color='primary' 
                    sx={{width: '90%',margin: '4px auto'}} 
                    fullWidth 
                    variant={location.pathname === el.path ? 'contained' : 'outlined'}>

                        <Button onClick={(e) => handleClick(e, el.path)} sx={{width: '10%'}} size="small" >{el.icon}</Button>
                        <Button onClick={(e) => handleClick(e, el.path)} sx={{width: '90%'}} >{el.title}</Button>
                        
                </ButtonGroup>
            )
          )}
    </>
    
  )
}

export default SideBarButtons