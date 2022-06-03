import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import logo from './images/logo.png';
import {Grid} from '@mui/material';
import "./feedback.css";

const AppBaar = () => {
  return (
    <React.Fragment>
              <CssBaseline />
      <AppBar style={{background:"#9DECF4"}}>
        <Toolbar>
          <Grid container  xs={12}>

                <Grid xs={12}>
                <Typography >
                  <img src={logo} style={{height:"50px",width:"120px",marginTop:"6px"}} alt=""/>
                  
                    <Typography style={{fontSize:"8px",color:"#000",fontWeight:"bold"}}>

                          SECURE | ANALYSE | OPTIMIZE
                    </Typography>
                </Typography>

                </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  )
}

export default AppBaar;