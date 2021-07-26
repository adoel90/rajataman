import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';



import './Footer.css'

export default () => (
  <div style={{backgroundColor: '#f0ffff'}}>          
     <Container  maxWidth="lg" style={{padding: 8}}>
       <Grid container>
          <Grid item sm={12} md={4}>   
              <Typography variant="h4" align="center">
                Tentang Kami
              </Typography>                            
              <Typography variant="p" component="div">
                <Box textAlign="justify" m={2}>
                  Rajanya Taman menyediakan berbagai layanan yang kami sediakan diantaranya menerima Jasa Pembuatan Taman, Kolam Minimalis, Kolam Relief, Saung Gazebo, Vertical Garden, Menjual Tanaman Hias, Dekorasi Tebing, Cat Wash, Lantai Carport, Kolam Koi.
                </Box>
              </Typography>
              
          
          </Grid>
          <Grid item sm={12}  md={4}>
            <Typography variant="h4" align="center">
              Hubungi Kami
            </Typography>
            <Typography variant="p" component="div">
              <Box textAlign="justify" m={2}>                  
                  Kp. Baru RT.004 RW.009 Desa Ragajaya, Kec. Bojonggede, Kab. Bogor
              </Box>
            </Typography>
            <List >            
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor: '#31c2bc'}}>
                    <SmartphoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={
                  <Typography variant="p">
                    0895321472548
                  </Typography>
                } />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor: '#31c2bc'}}>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={
                     <Typography variant="p">
                       dedystruck@gmail.com
                     </Typography>
                } />
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={12} md={4}>
            <Typography variant="h4" align="center">
              Info Terbaru
            </Typography>
            <Typography variant="p" component="div">
                <Box textAlign="justify" m={2}>
                  <i>Blog/artikel adalah <a href="https://photos.app.goo.gl/hkmZYp7JCZPWpRUS6" target="_blank">FITUR WEB PRO !</a></i>
                </Box>
              </Typography>
          </Grid>
       </Grid>
      </Container>                       
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. &nbsp;    
          <IconButton aria-label="fb" size="small" style={{color: 'white'}}>
            <a href="https://web.facebook.com/" target="_blank">
              <FacebookIcon />
            </a>
          </IconButton>      
          &nbsp;
          <IconButton aria-label="ig" size="small" style={{color: 'white'}}>
              <a href="https://www.instagram.com/" target="_blank">
                <InstagramIcon />
              </a>
          </IconButton>      
        </span>
      </div>
    </footer>
  </div>
)
