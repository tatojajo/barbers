import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Header() {
  const navigate = useNavigate()
  const user = localStorage.getItem('token')

  const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    navigate('/')
  }

  const loginPage = () => {
    navigate('/login')
  }

  const renderLoginOrLogOutButton = () => {
    if (user) {
      return (
        <Button onClick={logOut} variant='contained' color='error'>Log Out</Button>
      );
    } else {
      return (
        <Button onClick={loginPage} variant="contained" color='success'>Login</Button>
      );
    }
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src="https://static.vecteezy.com/system/resources/previews/006/046/341/original/barbershop-logo-vintage-classic-style-salon-fashion-haircut-pomade-badge-icon-simple-minimalist-modern-barber-pole-razor-shave-scissor-razor-blade-retro-symbol-luxury-elegant-design-free-vector.jpg" alt="logo" style={{ width: '30px', borderRadius: '5px', marginRight: '5px' }} />
          <Typography onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1, cursor:"pointer" }}>
            Barbers
          </Typography>
          {renderLoginOrLogOutButton()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}