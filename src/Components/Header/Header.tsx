import { Link, useLocation } from "react-router-dom";
// import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
// import MenuIcon from '@mui/icons-material/Menu';

// const Header = () => {
//   const location = useLocation()

//   const renderLoginOrHomeButton = () => {
//     if (location.pathname === '/') {
//       return (
//         <Link to='/login'>
//           <Button color='secondary'>Login</Button>
//         </Link>
//       );
//     } else {
//       return (
//         <Link to='/'>
//           <Button color='secondary'>Home</Button>
//         </Link>
//       );
//     }
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Barbers
//           </Typography>
//           {renderLoginOrHomeButton()}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   )
// }

// export default Header



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const location = useLocation()

  const renderLoginOrHomeButton = () => {
    if (location.pathname === '/') {
      return (
        <Link to='/login'>
          <Button color='secondary'>Login</Button>
        </Link>
      );
    } else {
      return (
        <Link to='/'>
          <Button color='secondary'>Home</Button>
        </Link>
      );
    }
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src="https://static.vecteezy.com/system/resources/previews/006/046/341/original/barbershop-logo-vintage-classic-style-salon-fashion-haircut-pomade-badge-icon-simple-minimalist-modern-barber-pole-razor-shave-scissor-razor-blade-retro-symbol-luxury-elegant-design-free-vector.jpg" alt="logo" style={{width:'30px', borderRadius:'5px', marginRight:'5px'}} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Barbers
          </Typography>
         {renderLoginOrHomeButton()}
        </Toolbar>
      </AppBar>
    </Box>
  );
}