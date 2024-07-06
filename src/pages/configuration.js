import * as React from 'react';
import { convertToRaw, EditorState } from "draft-js";
import {Grid, Box, Tab , Tabs  , Dialog, DialogTitle, DialogContent, DialogActions, TextField, LinkTab , Toolbar, Typography, Button} from '@mui/material';
import { config } from '../config/config';
import chatImage from '../ressources/images/chat.webp';
import drapeauImage from '../ressources/images/drapeau-territoire-de-belfort.png'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddIcon from '@mui/icons-material/Add';

export default function Configuration() {
    const [showArticle, setShowArticle] = React.useState(null);
    const [newName, setName] = React.useState("test");
    const [newDescription, setDescription] = React.useState("");
    const [newTexte, setTexte] = React.useState("");
    const [newImage, setImage] = React.useState("");
    const [page, setPage] = React.useState(0);
    const horaireDefaultValue = "Lundi: 13h-15h\nMardi: 13h-15h\nMercredi: Fermé\nJeudi: 13h-15h\nVendredi: 13h-15h"

    
    const imageMap = {
        '../ressources/images/chat.webp': chatImage,
    };

    const openModifArticle = (article) => {
        console.log(article)
        setName(article.nom)
        setDescription(article.description)
        setTexte(article.texte)
        setImage(article.img)
        setShowArticle(article)
    }



    return(
        <Box>
        <Toolbar />
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: `calc(100vh - 64px)`, flexDirection:"column"}}>
            <Box sx={{height:"64px", backgroundColor:"rgba(15,82,186,0.5)", justifyContent:"center", display:"flex", alignItems:"center"}}>
                <Typography sx={{color:"white", fontSize:24}}>Panneau de configuration</Typography>
            </Box>
            <Box sx={{display:"flex", height: `calc(100vh - 64px - 64px)`}}>
            <Box sx={{display:"flex", flexDirection:"column", minWidth:"120px"}}>
                <Button onClick={()=>{setShowArticle(null); setPage(0)}} sx={{ border:'0px solid grey', borderRightWidth:1, borderRightColor:page==0?"rgb(25,118,210)":"grey", borderRadius:0, backgroundColor:"white", color:page==0?"rgb(25,118,210)":"grey", '&:hover': {opacity:1, backgroundColor:"rgba(25,118,210,0.2)" }}}>Actualité</Button>
                <Button onClick={()=>{setShowArticle(null); setPage(1)}} sx={{ border:'0px solid grey', borderRightWidth:1, borderRightColor:page==1?"rgb(25,118,210)":"grey",borderRadius:0,backgroundColor:"white",  color:page==1?"rgb(25,118,210)":"grey", '&:hover': {opacity:1, backgroundColor:"rgba(25,118,210,0.2)" }}}>Apparence</Button>
                <Button onClick={()=>{setShowArticle(null); setPage(2)}} sx={{ border:'0px solid grey', borderRightWidth:1, borderRightColor:page==2?"rgb(25,118,210)":"grey",borderRadius:0, backgroundColor:"white", color:page==2?"rgb(25,118,210)":"grey", '&:hover': {opacity:1, backgroundColor:"rgba(25,118,210,0.2)" }}}>Infos</Button>
                <Box sx={{border:'0px solid grey', borderRightWidth:1, borderRightColor:"grey", height:"100%", opacity:0.2}}>

                </Box>
            </Box>

            <Box sx={{display:"flex", flexDirection:"column", marginTop:5}}>
                {page === 0 && 
                <>
                    <Box sx={{ display: "flex", width: '100%', justifyContent: 'space-between' }}>
                        <Typography component="div" sx={{fontSize:20, textAlign:"left", marginLeft:8}}>Actualités ({config.articles.length})</Typography>
                        <Button onClick={()=>{setShowArticle(null)}} sx={{ backgroundColor:"rgb(25,118,210)", marginRight:5, color:"white", right:25, '&:hover': {opacity:0.8, backgroundColor:"rgb(25,118,210)" }}}>+ Nouveau</Button>

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', maxHeight: "70vh", overflowX: "auto", paddingBottom:15}}>
                                {config.articles.slice(0).reverse().map((article, index) => (
                                    <Box onClick={()=>{openModifArticle(article)}} sx={{
                                        boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, 0.1)',
                                        padding: 1,
                                        margin: 2,
                                        width: "10%",
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
                                        <Typography component="div" sx={{ fontSize: 20 }}>{article.nom}</Typography>
                                        <Typography component="div" sx={{ fontSize: 12 }}>{article.description}</Typography>
                                    </Box>
                                ))}  
                    </Box>
                </>
                }
                {page === 1 && 
                <>
                </>
                }
                {page === 2 && 
                <>
                    <Box sx={{ display: "flex", width: '100%', justifyContent: 'space-between' }}>
                        <Typography component="div" sx={{fontSize:20, textAlign:"left", marginLeft:8}}>Informations</Typography>
                    </Box>
                    <Box sx={{marginLeft:8, marginTop:5, display:"flex", flexDirection:"column", animation: 'fadeIn 0.5s ease-in-out','@keyframes fadeIn': {'0%': { opacity: 0, transform: 'translateY(20px)' },'100%': { opacity: 1, transform: 'translateY(0)' }},}}>
                        <TextField
                            label="Nom"
                            defaultValue="Mairie de Modeon"
                            sx={{width:300}}
                        />
                        <TextField
                            label="Adresse physique"
                            defaultValue="70 boulevard des laurentides, H7G0A9, Laval"
                            sx={{marginTop:4, width:300}}
                        />
                        <TextField
                            label="Numéro de téléphone"
                            defaultValue="0351522355"
                            sx={{marginTop:4, width:300}}
                        />
                        <TextField
                            label="Email"
                            defaultValue="exemple@gmail.com"
                            sx={{marginTop:4, width:300}}
                        />
                        <TextField
                            label="Horaires d'ouverture"
                            multiline
                            rows={5}
                            defaultValue={horaireDefaultValue}
                            InputProps={{
                                style: { whiteSpace: 'pre-line' }
                            }}
                            sx={{marginTop:4, width:300}}
                        />
                    </Box>
                </>
                }
            </Box>
                
            </Box>

        </Box>


        {showArticle!==null  && 
        <Dialog open={showArticle!==null} onClose={()=>{setShowArticle(null)}} maxWidth="md">
        <DialogTitle>Modification d'article</DialogTitle>
        <DialogContent>
        <Box sx={{display:"flex"}}>
            <Box sx={{width:"75%"}}>
            <TextField
                margin="dense"
                label="nom"
                fullWidth
                defaultValue={newName}
                value={newName}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                margin="dense"
                label="description"
                fullWidth
                defaultValue={newDescription}
                value={newDescription}
                onChange={(e) => setDescription(e.target.value)}
            />
            </Box>
            <Box 
                sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20%",
                marginLeft:"2.5%",
                marginRight:"2.5%",
                position: "relative",
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                },
                }}
            >
                <img 
                src={imageMap[showArticle.img]} 
                style={{ width: 'auto', height: '128px', opacity:0.9 }} 
                alt="Article"
                />
                <AddIcon 
                sx={{
                    position: 'absolute',
                    color: 'white',
                    fontSize: '2rem',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    opacity: 1,
                }}
                />
            </Box>
        </Box>
        <Box sx={{marginTop:1, maxHeight:"60vh", overflowX:"auto"}}>
          <ReactQuill theme="snow" value={newTexte} onChange={setTexte}/>
          </Box>

        </DialogContent>
        <DialogActions>
        <Button sx={{backgroundColor:"grey", color:"white", '&:hover': {backgroundColor: 'grey', opacity:0.8}}} onClick={()=>{setShowArticle(null)}}>Annuler</Button>
          <Button sx={{backgroundColor:"rgb(207,53,46)", color:"white", '&:hover': {backgroundColor: 'rgb(207,53,46)', opacity:0.8}}} onClick={()=>{setShowArticle(null)}}>Supprimer</Button>
          <Button sx={{backgroundColor:"rgb(25,118,210)", color:"white", '&:hover': {backgroundColor: 'rgb(25,118,210)', opacity:0.8}}} onClick={()=>{setShowArticle(null)}}>Sauvegarder</Button>
        </DialogActions>
      </Dialog>
      }
        
        
      </Box>
    )
}