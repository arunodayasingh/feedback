import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {Typography,useScrollTrigger} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Paper,Zoom,Container,Box} from '@mui/material';
import {Grid,TextField,Radio,RadioGroup,FormControlLabel,FormLabel,FormControl,Button,Fab} from '@mui/material';
import "./feedback.css";
import { send } from 'emailjs-com';
import Swal from 'sweetalert2';
import { useNavigate} from "react-router-dom";
import Appbaar from "./appbar";
// import Loader from "react-loader-spinner";
// import LoadingSpinner from './loadingSpinner';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



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
        to_name: 'Customer Support ',
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
        reply_to: 'customer.support@imzcorporate.com',
      });

      const [isLoading,setIsLoading] = useState(false);


      let navigate = useNavigate();

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    


      const onSubmit = (e) => {
        
          if(toSend.from_name.trim() === ""){
            alert("please enter your name !")
              return false;
          }
          if(toSend.email.trim() === ""){
            alert("please enter your email !")
              return false;
          }

        e.preventDefault();
        setIsLoading(true);
        send(
          'service_388b8kh',
          'template_woyfrj8',
          toSend,
          'AQXbDZiV7yU_PeLZu'
        )
          .then((response) => {
            // console.log('SUCCESS!', response.status, response.text);
            setIsLoading(false);
            navigate("./thankyou")
              
          })
          .catch((err) => {
            // console.log('FAILED...', err);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              
            })
            setIsLoading(false);
          });
      };

    return (
        <React.Fragment>
          <Appbaar/>
      <Container>
        <Box sx={{ my: 2 }}>
        <Grid  xs={12} style={{marginTop:"24px"}}>
             <Typography className="head1" style={{fontFamily:"monospace",textAlign:"center",fontSize:"24px",marginTop:"15px"}}>
                 CUSTOMER FEEDBACK FORM
             </Typography>
             
         </Grid>
      <Paper elevation={3} style={{marginTop:"30px",paddingLeft:"16px"}}>

               
                <Grid
                 xs={12}
                 container
                 direction="row"
                 justifyContent="flex-start"
                 alignItems="flex-start"
                
                 >
             
             <Grid  xs={12} style={{marginLeft:"24px"}}>
                <Typography 
                style={{fontWeight:"bolder",marginTop:"16px",marginBottom:"4px",display:"inline-flex",}}>

                  Customer Information
                </Typography>
                <hr style={{width:"98%",border:"1px solid black",marginRight:"48px"}}/>


                <Grid container xs={12} md={12} lg={12} style={{marginTop:"12px",marginBottom:"6px"}}>
                  
                <Grid  xs={8} md={6} lg={4} style={{marginTop:"16px",}}>

                  <Grid  xs={12} md={6} style={{marginBottom:"6px"}} >
                  <Typography>
                    Enter Name *
                  </Typography>

                  </Grid>
                  <Grid xs={12} md={6} >
                  <TextField
                    required
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    value={toSend.from_name}
                    onChange={handleChange}
                    style ={{width: '100%',paddingRight:"16px"}}
                    InputProps={{ style: { fontSize: 15,width:"150%",marginRight:"12px" } }}
                    // style={{height:"40px", width:"330px",marginRight:"24px",marginTop:"4px",display:""}}
                    />

                  </Grid>

                </Grid>


                <Grid  xs={8} md={6}  lg={4} style={{marginTop:"16px"}}>

                      <Grid xs={12} md={6} lg={6}  style={{marginBottom:"6px"}}>
                        <Typography>
                          Enter Email *
                        </Typography>
                      </Grid>

                      <Grid xs={12} md={6} lg={6}>
                      <TextField
                        required
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={toSend.email}
                        onChange={handleChange}
                        style ={{width: '100%',paddingRight:"16px"}}
                        InputProps={{ style: { fontSize: 15,width:"150%",marginRight:"12px" } }}
                        />

                      </Grid>
                    </Grid>

                    <Grid  xs={8} md={6} lg={4} style={{marginTop:"16px",}}>

                        <Grid xs={12} md={6}  style={{marginBottom:"6px"}}>
                          <Typography>
                            Enter Contact
                          </Typography>
                        </Grid>

                        <Grid xs={12} md={6} >
                        <TextField
                          required
                          type="tel"
                          name="contact"
                          placeholder="Contact No."
                          value={toSend.contact}
                          onChange={handleChange}
                          style ={{width: '100%',paddingRight:"16px"}}
                          InputProps={{ style: { fontSize: 15,width:"150%"} }}
                          />

                        </Grid>

                        </Grid>

              </Grid>
                    </Grid>
            </Grid>

          <hr style={{width:"96%",textAlign:"center",paddingLeft:"26px",marginTop:"22px"}}/>
            <Grid xs={12} style={{marginTop:"16px"}}>


          <Typography style={{paddingTop:"12px",marginLeft:"24px",marginBottom:"4px",fontSize:"12px"}}>
          Please take a few minutes to give us feedback about our service by filling in this short Customer Feedback Form. We are conducting this research in order to measure your level of satisfaction with the quality of our service. We thank you for your participation.
          </Typography>
          </Grid>


               

                <Grid xs={12} style={{marginLeft:"24px"}}>
                <Typography 
                style={{fontWeight:"bolder",marginTop:"16px",marginBottom:"4px",display:"inline-flex",}}>

                    Overall experience with our service
                </Typography>
                <hr style={{width:"98%",border:"1px solid black",marginRight:"48px"}}/>

            <Grid xs={12} md={12} style={{marginTop:"16px"}}>

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
       
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Average" control={<Radio />} label="Average" />
        <FormControlLabel value="Poor" control={<Radio />} label="Poor" />
        
       
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>How would you rate the courtesy & efficiency of Service agent?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value2"
       value= {toSend.value2}
      onChange={handleChange}
      >
         <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Average" control={<Radio />} label="Average" />
        <FormControlLabel value="Poor" control={<Radio />} label="Poor" />
       
      </RadioGroup>
    </FormControl>
                    
                </Grid>
    </Grid>


{/* feedback    */}
<Grid xs={12} style={{marginLeft:"24px"}}>
                <Typography 
                style={{fontWeight:"bolder",marginTop:"16px",marginBottom:"4px",display:"inline-flex",}}>

Feedback Information
                    </Typography>
                <hr style={{width:"98%",border:"1px solid black",marginRight:"48px"}}/>

                   
               
            
                <Grid xs={12} style={{marginTop:"16px"}}>
                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>Did we appropriately respond to your customers service needs today?</FormLabel>
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

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>Did you receive the service, information, or help you needed?</FormLabel>
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

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>Were you treated in a courteous and considerate manner?</FormLabel>
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

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>Was service provided in a timely manner?</FormLabel>
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

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>Were you satisfied with your overall service experience?</FormLabel>
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

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>Would you use our customer service in the future?</FormLabel>
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
  

    <Grid  xs={8} md={6} lg={12} >
        <Grid xs={12} md={12} lg={12}>

        <Typography 
                style={{fontWeight:"bolder",display:"inline-flex",}}>

                  <h5>What should we change in order to live up to your expectations?</h5>
                </Typography>
                {/* <hr style={{width:"98%",border:"1px solid black",marginRight:"48px"}}/> */}
        </Grid>

        <Grid className="feedback-box" xs={8} md={6}>
        
            <TextField
            type="text"
            name="message"
            value={toSend.message}
            onChange={handleChange}
            multiline
            rows={3}
            placeholder="please share your feedback."
            style ={{width: '100%',paddingRight:"16px",textAlign:"left"}}
            InputProps={{ style: {fontSize: 15,} }}   
          />
          </Grid>
       
    </Grid>

                    
        </Grid>
    </Grid>

        <Grid xs={12} style={{paddingLeft:"24px",paddingTop:"28px",paddingBottom:"16px"}}>

   {/* for loading spinner */}
        {/* {isLoading? <LoadingSpinner /> :"" } */}

        {isLoading? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop> :"" }
            <Button type="button" 
            variant="contained"
            onClick={onSubmit}
            disabled={isLoading}
            >
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
