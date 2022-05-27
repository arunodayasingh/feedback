import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import "./feedback.css";


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
      <CssBaseline />
      <AppBar style={{background:"linear-gradient(90deg, rgba(61,61,94,1) 0%, rgba(19,195,219,1) 100%)"}}>
        <Toolbar>
          <Typography variant="h6" component="div">
            FeedBack
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
        <Grid xs={12}>
             <Typography className='Feedback_head2' >
                 CUSTOMER FEEDBACK FORM
             </Typography>
         </Grid>
            <Paper elevation={3} style={{marginTop:"30px"}}>
                <Typography style={{marginLeft:"24px",marginTop:"4px",fontSize:"12px"}}>
                Thank you for providing us with your feedback! It means the world to us.<br/>
                 Hope to see you again soon! :)
                </Typography>
        </Paper>

         
        </Box>
      </Container>
     
    </React.Fragment>
  );
}
