import * as React from 'react';
import {Grid, Box, Item, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button} from '@mui/material';
import { config } from '../config/config';
import chatImage from '../ressources/images/chat.webp';
import drapeauImage from '../ressources/images/drapeau-territoire-de-belfort.png'
import { keyframes } from '@emotion/react';



export default function Accueil() {

    const imageMap = {
        '../ressources/images/chat.webp': chatImage,
      };

    const [showArticle, setShowArticle] = React.useState(null);

    return(
        <Box>
        <Toolbar />
        <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={0}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8} sx={{backgroundColor:"rgba(255,255,255,0.95)", display:"flex", height:'100vh', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', paddingLeft:0}}>
                {!showArticle? 
                    <Box sx={{marginTop:1, width:'100%', paddingLeft:3, paddingRight:3}}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'  }}>
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:2  }}>
                                <Typography sx={{ fontSize: 26, textAlign: 'left' }}>Horaires d'ouverture</Typography>
                                <Typography sx={{ fontSize: 12, textAlign: 'left', whiteSpace: 'pre-line' }}>{config.mairie_ouverture}</Typography>
                            </Box>
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                <img src={drapeauImage} style={{ width: 150, height: 'auto', marginTop:10 }} />
                            </Box>
                            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:2  }}>
                                <Typography sx={{ fontSize: 26, textAlign: 'left' }}>Nous joindre</Typography>
                                <Typography sx={{ fontSize: 12, textAlign: 'left', whiteSpace: 'pre-line' }}>Mairie de Modeon</Typography>
                                <Typography sx={{ fontSize: 12, textAlign: 'left', whiteSpace: 'pre-line' }}>{config.addresse.rue}</Typography>
                                <Typography sx={{ fontSize: 12, textAlign: 'left', whiteSpace: 'pre-line' }}>{config.addresse.cp}, {config.addresse.ville}</Typography>
                                <Typography sx={{ fontSize: 12, textAlign: 'left', whiteSpace: 'pre-line' }}>{config.email}</Typography>
                                <Typography sx={{ fontSize: 12, textAlign: 'left', whiteSpace: 'pre-line' }}>{config.telephone}</Typography>
                            </Box>
                        </Box>

                        <Typography sx={{fontSize:26, textAlign:"left"}}>Actualités</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', maxHeight: "75%", overflowX: "auto" }}>
                            {config.articles.slice(0).reverse().map((article, index) => (
                                <Box onClick={()=>{setShowArticle(article)}} sx={{
                                    boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, 0.1)',
                                    padding: 1,
                                    margin: 2,
                                    width: "30%",
                                    transition: 'background-color 0.3s, cursor 0.3s',
                                    animation: 'fadeIn 0.5s ease-in-out',
                                    '@keyframes fadeIn': {
                                        '0%': { opacity: 0, transform: 'translateY(20px)' },
                                        '100%': { opacity: 1, transform: 'translateY(0)' }
                                    },
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        cursor: 'pointer'
                                    }
                                }} key={index}>
                                    <img 
                                        src={imageMap[article.img]} 
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    <Typography sx={{ fontSize: 20 }}>{article.nom}</Typography>
                                    <Typography sx={{ fontSize: 12 }}>{article.description}</Typography>
                                </Box>
                            ))}
                        </Box>

                    </Box>
                :
                <Box sx={{marginTop:3, width:'100%', paddingLeft:3, paddingRight:3, position: 'relative',}}>
                    <Button onClick={()=>{setShowArticle(null)}} sx={{position:"absolute", zIndex:1, backgroundColor:"rgb(25,118,210)", color:"white", right:25, '&:hover': {opacity:0.8, backgroundColor:"rgb(25,118,210)" }}}>retour</Button>
                    <Box sx={{ transition: 'background-color 0.3s, cursor 0.3s', animation: 'fadeIn 0.5s ease-in-out',
                    '@keyframes fadeIn': {
                        '0%': { opacity: 0, transform: 'translateY(20px)' },
                        '100%': { opacity: 1, transform: 'translateY(0)' }
                    }, }}>
                    <img src={imageMap[showArticle.img]} style={{ width: '20%', height: 'auto', borderRadius:50 }} />
                    <Typography sx={{ fontSize: 20 }}>{showArticle.nom}</Typography>
                    <Typography sx={{ fontSize: 12 }}>{showArticle.description}</Typography>
                    <Box 
                        sx={{
                            border: 0,
                            borderBottom: "1px solid transparent",
                            marginTop: 1,
                            background: "linear-gradient(to right, transparent, black, transparent)",
                            height: "2px",
                            opacity:0.8
                        }}
                        ></Box>
                    <Typography  sx={{ whiteSpace: "pre-line", fontSize: 12, marginTop:2, textAlign:"left" }}>{showArticle.texte}</Typography>
                    </Box>

                </Box>
                 }
            </Grid>
            <Grid item xs={2}>
            </Grid>

        </Grid>
        </Box>
        
        
      </Box>
    )
}