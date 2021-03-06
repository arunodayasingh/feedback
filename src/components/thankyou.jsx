import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import "./feedback.css";
import AppBaar from './appbar';
import { FcApproval } from "react-icons/fc";
import logo from "./images/logo.png"


function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default function Thankyou(props) {

   

   
    return (
        <React.Fragment>
     <AppBaar/>
      <Container>
        <Box sx={{ my: 2 }}>
        <Grid xs={12} style={{marginTop:"34px"}}>
             <Typography style={{fontFamily:"monospace",textAlign:"center",fontSize:"24px",marginTop:"15px"}}>
                 CUSTOMER FEEDBACK FORM
             </Typography>
             
         </Grid>
      <Paper elevation={3} style={{marginTop:"35px",paddingLeft:"16px"}}>

                <Typography className='thankhead' style={{textAlign:"center", fontSize:"80px",fontWeight:"bold",fontFamily:"monospace",paddingRight:"10px"}}>
              
                    THANK  YOU

                </Typography>

               
                    <div style={{textAlign:"center"}}>

		                  <FcApproval size={100}  />
                    </div>
               
              <Typography className='thankhead2' style={{textAlign:"center",fontFamily:"monospace",marginLeft:"24px",marginRight:"24px",marginTop:"8px",fontSize:"22px",justifyContent:"left"}}>
                Thank you for providing us with your feedback, Hope to see you again soon.
                  
              </Typography> 

                 {/* <Typography style={{textAlign:"justify",fontFamily:"monospace",marginLeft:"24px",marginRight:"24px",marginTop:"8px",fontSize:"22px",justifyContent:"left"}}>

                 As your given feedback and for better experience, <br/> we will look forward to hearing from you <br/>
                  and trying to improve our services and supports.

                 
                 </Typography>  */}

                <Typography  style={{marginTop:"22px",marginLeft:"24px",textAlign:"left"}}>
                Thanks.

                <br/>
                <Typography >
                  <img src={logo} style={{height:"30px",width:"80px",marginTop:"6px"}} alt=""/>
                    <Typography style={{fontSize:"8px",color:"#000",fontWeight:"bold"}}>
                          SECURE | ANALYSE | OPTIMIZE
                    </Typography>
                </Typography>
                </Typography>

        </Paper>

         
        </Box>
      </Container>
     
    </React.Fragment>
  );
}
