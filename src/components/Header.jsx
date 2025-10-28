import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {

    const projectInfo = "The main objective of this application is to make the resume creation process easier for freshers and job seekers by providing a structured template where users only need to enter their personal, educational, and professional details. The app automatically formats the information into a clean and professional resume layout."

  return (
     <Box sx={{ flexGrow: 1 }}>                      
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://cdn-icons-png.flaticon.com/512/4635/4635337.png" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to={'/'} className='text-light text-decoration-none' >rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}>
            <Button color="inherit">About Us</Button>
            </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header


// inline property in material ui : sx
// Box similar to div
// App bar similar to navbar
// Link - import { Link } from 'react-router-dom'; : for redirecting pages