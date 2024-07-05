import * as React from 'react';
import './App.css';
import {AppBar, Box, Button, CssBaseline, Dialog, DialogTitle, DialogContent,TextField, Divider, DialogActions,Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Accueil from './pages/accueil';
import Configuration from './pages/configuration';
import backgroundImage from './ressources/images/village.jpg'
import drapeauImage from './ressources/images/drapeau-territoire-de-belfort.png'
import SettingsIcon from '@mui/icons-material/Settings';
const drawerWidth = 240;

const navItems = ['Accueil', 'Salle des fêtes', 'Contact'];

function App(props: Props) {


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showLoginWindow, setShowLoginWindow] = React.useState(false);
  const [pageIdx, setPageidx] = React.useState(1);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogin = () => {
    console.log(`Logging in with username: ${username} and password: ${password}`);
    setPageidx(0)
    setShowLoginWindow(false)

  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <div className="App" >
       <Box sx={{

      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <CssBaseline />
      <AppBar component="nav"  elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={drapeauImage} style={{ width:50, height: 'auto', marginRight:10 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', textAlign:'left' } }}
          >
            Mairie de Modeon
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, i) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={()=>{setPageidx(i+1)}}>
                {item}
              </Button>
            ))}
          </Box>
          <IconButton aria-label="delete" size="small" onClick={()=>{setShowLoginWindow(true)}}>
            <SettingsIcon fontSize="inherit" sx={{color:"white"}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {pageIdx === 0 && 
        <Configuration/>
        
      }
      {pageIdx === 1 && 
        <Accueil/>
        
      }


  
    </Box>
    {showLoginWindow  && 
        <Dialog open={true} onClose={()=>{setShowLoginWindow(false)}} >
        <DialogTitle>Panneau de configuration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="nom d'utilisateur"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="mot de passe"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{backgroundColor:"rgb(207,53,46)", color:"white", '&:hover': {backgroundColor: 'rgb(207,53,46)', opacity:0.8}}} onClick={()=>{setShowLoginWindow(false)}}>Fermer</Button>
          <Button sx={{backgroundColor:"rgb(25,118,210)", color:"white", '&:hover': {backgroundColor: 'rgb(25,118,210)', opacity:0.8}}} onClick={()=>{handleLogin()}}>Se connecter</Button>
        </DialogActions>
      </Dialog>
      }

    </div>
  );
}

export default App;
