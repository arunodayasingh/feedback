import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import logo from './images/logo.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import "./feedback.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { send } from 'emailjs-com';
import Button from "@mui/material/Button";
import Swal from 'sweetalert2';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useNavigate, Navigate } from "react-router-dom";


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



export default function BackToTop(props) {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'arunodaya',
        email: '',
        contact: '',
        message: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        reply_to: 'arunodaya.singh@imzcorporate.com',
      });


      let navigate = useNavigate();

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    


      const onSubmit = (e) => {
          if(toSend.from_name.trim() === ""){
            alert("please enter your name!")
              return false;
          }

        e.preventDefault();
        send(
          'service_388b8kh',
          'template_woyfrj8',
          toSend,
          'AQXbDZiV7yU_PeLZu'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
              navigate("./thankyou")
              
          })
          .catch((err) => {
            console.log('FAILED...', err);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
             
            })
          });
      };

    return (
        <React.Fragment>
      <CssBaseline />
      <AppBar style={{background:"#9DECF4"}}>
        <Toolbar>
          <Grid container  xs={12}>

                <Grid xs={4}>
                <Typography >
                  <img src={logo} style={{height:"50px",width:"120px",marginTop:"6px"}} alt=""/>
                <Typography style={{fontSize:"8px",color:"#000"}}>
                      SECURE | ANALYSE | OPTIMIZE
                </Typography>
                </Typography>

                </Grid>

               

             


          </Grid>
          
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
        <Grid xs={12} style={{marginTop:"24px"}}>
             <Typography style={{fontFamily:"monospace",textAlign:"center",fontSize:"24px",marginTop:"15px"}}>
                 CUSTOMER FEEDBACK FORM
             </Typography>
             
         </Grid>
      <Paper elevation={3} style={{marginTop:"30px"}}>

                <Grid xs={12} style={{marginTop:"16px"}}>


                <Typography style={{paddingTop:"12px",marginLeft:"24px",marginBottom:"4px",fontSize:"12px"}}>
                Please take a few minutes to give us feedback about our service by filling in this short Customer Feedback Form. We are conducting this research in order to measure your level of satisfaction with the quality of our service. We thank you for your participation.
                </Typography>
                </Grid>
                <hr style={{width:"97%",paddingLeft:"24px" }}/>

                <Grid
                 xs={12}
                 container
                 direction="row"
                 justifyContent="flex-start"
                 alignItems="flex-start"
                 style={{borderBottom:"1px solid black"}}
                 >
                <Grid xs={12} >
                  
                <Typography 
                style={{fontWeight:"bolder", marginLeft:"24px",marginTop:"16px",padding:"4px",borderRadius:"6px", display:"inline-flex"}}>
                   Basic Information
                </Typography>
                <hr style={{width:"96%",border:"1px solid black" }}/>


                <Grid   xs={12} style={{marginLeft:"24px",marginTop:"12px",marginBottom:"6px"}}>
                  
                <Grid container xs={12} style={{marginTop:"22px"}}>

                  <Grid xs={4}>
                  <Typography>
                    Enter Your Name
                  </Typography>

                  </Grid>
                  <Grid xs={8}>
                  <TextField
                    required
                    type="text"
                    name="from_name"
                    label="Enter Name"
                    value={toSend.from_name}
                    onChange={handleChange}
                    size= "small"
                    style={{height:"40px", width:"500px",marginRight:"24px"}}
                    />


                  </Grid>

                </Grid>

                <Grid container xs={12} style={{marginTop:"22px"}}>

                  <Grid xs={4}>
                  <Typography>
                    Enter Your Email
                  </Typography>

                  </Grid>
                  <Grid xs={8}>
                  <TextField
                    required
                    type="text"
                    name="email"
                    label="Enter Your Email"
                    value={toSend.email}
                    onChange={handleChange}
                    size= "small"
                    style={{height:"40px", width:"500px",marginRight:"24px"}}
                    />
                    </Grid>

                    </Grid>

                 

              

                {/* <Grid xs={12}>

                <TextField
                    required
                    type="text"
                    name="email"
                    label="Enter Email"
                    value={toSend.email}
                    onChange={handleChange}
                    />
                </Grid> */}

                {/* <Grid xs={12} md={4}>
                <TextField
                    
                    type="tel"
                    name="contact"
                    label="Enter Contact No."
                    value={toSend.contact}
                    onChange={handleChange}
                    />
                </Grid> */}

              </Grid>
                    </Grid>
            </Grid>

               

                <Grid xs={12} style={{marginLeft:"24px"}}>
                <Typography 
                style={{fontWeight:"bolder",marginTop:"16px",marginBottom:"16px",padding:"4px",borderRadius:"6px",border:"1px solid black", display:"inline-flex",background:"#000",color:"#fff"}}>

                    Overall experience with our service
                   </Typography>
               
            
                <Grid xs={12}>
                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">How would you rate your overall experience with our service?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value1"
       value= {toSend.value1}
      onChange={handleChange}

      >
        <FormControlLabel value="very good" control={<Radio />} label="Very Good" />
        <FormControlLabel value="good" control={<Radio />} label="Good" />
        <FormControlLabel value="fair" control={<Radio />} label="Fair" />
        <FormControlLabel value="poor" control={<Radio />} label="Poor" />
        <FormControlLabel value="very poor" control={<Radio />} label="Very Poor" />
       
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">How would you rate the courtesy & efficiency of Service agent?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value2"
       value= {toSend.value2}
      onChange={handleChange}
      >
        <FormControlLabel value="very good" control={<Radio />} label="Very Good" />
        <FormControlLabel value="good" control={<Radio />} label="Good" />
        <FormControlLabel value="fair" control={<Radio />} label="Fair" />
        <FormControlLabel value="poor" control={<Radio />} label="Poor" />
        <FormControlLabel value="very poor" control={<Radio />} label="Very Poor" />
       
      </RadioGroup>
    </FormControl>
                    
                </Grid>
    </Grid>


{/* feedback    */}
    <Grid xs={12} style={{marginLeft:"24px"}}>
    <Typography 
                style={{fontWeight:"bolder",marginTop:"16px",marginBottom:"16px",padding:"4px",borderRadius:"6px",border:"1px solid black", display:"inline-flex",
                background:"#000",color:"#fff"}}>

                    Feedback Information
                    </Typography>
               
            
                <Grid xs={12}>
                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Did we appropriately respond to your customers service needs today?</FormLabel>
      <RadioGroup
       row
       aria-labelledby="demo-row-radio-buttons-group-label"
       type= "radio"
       name="value3"
      value= {toSend.value3}
     onChange={handleChange}

      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="not sure" control={<Radio />} label="Not Sure" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Did you receive the service, information, or help you needed?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value4"
       value= {toSend.value4}
      onChange={handleChange}

      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="not sure" control={<Radio />} label="Not Sure" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Were you treated in a courteous and considerate manner?</FormLabel>
      <RadioGroup
         row
         aria-labelledby="demo-row-radio-buttons-group-label"
         type= "radio"
         name="value5"
        value= {toSend.value5}
       onChange={handleChange}

      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="not sure" control={<Radio />} label="Not Sure" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Was service provided in a timely manner?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value6"
       value= {toSend.value6}
      onChange={handleChange}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="not sure" control={<Radio />} label="Not Sure" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Were you satisfied with your overall service experience?</FormLabel>
      <RadioGroup
         row
         aria-labelledby="demo-row-radio-buttons-group-label"
         type= "radio"
         name="value7"
        value= {toSend.value7}
       onChange={handleChange}

      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="not sure" control={<Radio />} label="Not Sure" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label">Would you use our customer service in the future?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value8"
       value= {toSend.value8}
      onChange={handleChange}

      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="not sure" control={<Radio />} label="Not Sure" />
      </RadioGroup>


    </FormControl>
    

    <Grid xs={12} style={{marginTop:"16px"}}>

        <Typography>
            <h5>What should we change in order to live up to your expectations?</h5>
            <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="please share your message."
            style={{ width: 450 }}
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
        </Typography>
    </Grid>

                    
        </Grid>
    </Grid>

        <Grid xs={12} style={{paddingLeft:"24px",paddingTop:"8px",paddingBottom:"10px"}}>

            <Button type="button" 
            variant="contained"

            onClick={onSubmit}>
                Submit FeedBack
            </Button>
          </Grid>
        </Paper>

         
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
