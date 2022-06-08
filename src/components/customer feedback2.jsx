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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        company_name: '',
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
      const [emailError, setEmailError] = useState(false)
      const [validEmail, setValidEmail] = useState(false)
      const [nameError, setNameError] = useState(false)
      const [companyError, setCompanyError] = useState(false)
     
      let navigate = useNavigate();

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        setCompanyError(false)
        setNameError(false);
        setEmailError(false); 
      }; 
      
      
      
      
      const emailRegex = /\S+@\S+\.\S+/;

      const onSubmit = (e) => {

       
        if(toSend.company_name.trim() === "" ){
          toast.error("company name cannot be empty");
          setCompanyError(true);
          return false;
        }
        
        
          if(toSend.from_name.trim() === "" ){
            toast.error("Name cannot be empty");
            setNameError(true);
            return false;
          }
          
          else if(toSend.email.trim() === ""){
            toast.error("Email cannot be empty");
            setEmailError(true);
            return false;
          }

          else if(toSend.from_name.trim() !== "" && toSend.email.trim() === "" ){
            toast.error("Email cannot be empty");
            setEmailError(true);
            setNameError(false)
            return false;
          }
          else if(!emailRegex.test(toSend.email))
          {
            setValidEmail(true);
            toast.error("Email not valid");
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
              <Grid  xs={8} md={6} lg={6} style={{marginTop:"16px",width:"100%"}}>

                <Grid  xs={12} md={6} lg={12}  style={{marginBottom:"6px"}} >
                <Typography>
                  Enter Company Name *
                </Typography>

                </Grid>

                <Grid xs={12} md={6} lg={6} >
                <TextField
                  required
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  error={!nameError && companyError }
                  helperText={companyError && !nameError && "Please enter company name "}
                  value={toSend.company_name}
                  onChange={handleChange}

                  inputProps={{
                    maxLength: 20
                  }}
                  style ={{width: '100%',paddingRight:"16px"}}
                  InputProps={{ style: { fontSize: 15,width:"150%",marginRight:"12px" } }}
                  // style={{height:"40px", width:"330px",marginRight:"24px",marginTop:"4px",display:""}}
                  />
                </Grid>
                {companyError &&  <ToastContainer autoClose={4000} />}

                </Grid>
                  
                <Grid  xs={8} md={6} lg={6} style={{marginTop:"16px",width:"100%"}}>

                  <Grid  xs={12} md={6} lg={12}  style={{marginBottom:"6px"}} >
                  <Typography>
                    Enter Name *
                  </Typography>

                  </Grid>

                  <Grid xs={12} md={6} lg={6} >
                  <TextField
                    required
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    error={!emailError && nameError }
                    helperText={nameError && !emailError && "Please enter your name"}
                    value={toSend.from_name}
                    onChange={handleChange}

                    inputProps={{
                      maxLength: 20
                    }}
                    style ={{width: '100%',paddingRight:"16px"}}
                    InputProps={{ style: { fontSize: 15,width:"150%",marginRight:"12px" } }}
                    // style={{height:"40px", width:"330px",marginRight:"24px",marginTop:"4px",display:""}}
                    />
                  </Grid>
                  {nameError &&  <ToastContainer autoClose={4000} />}

                </Grid>


                <Grid  xs={8} md={6}  lg={6} style={{marginTop:"16px"}}>

                      <Grid xs={12} md={6} lg={12}  style={{marginBottom:"6px"}}>
                        <Typography>
                          Enter Email *
                        </Typography>
                      </Grid>

                      <Grid xs={12} md={6} lg={6}>
                     
                      <TextField
                        required
                        type="text"
                        error={emailError}
                        helperText={emailError && !validEmail ? "Please enter your email": validEmail?"Please enter valid email": ""}
                        name="email"
                        placeholder="Email"
                        value={toSend.email}
                        onChange={handleChange}
                        maxLength={28}
                        style ={{width: '100%',paddingRight:"16px"}}
                        InputProps={{ maxlength: 10,style: { fontSize: 15,width:"150%",marginRight:"12px" } }}
                        />
                      {emailError &&   <ToastContainer autoClose={4000} />}
                      </Grid>
                    </Grid>

                    <Grid  xs={8} md={6} lg={6} style={{marginTop:"16px",}}>

                        <Grid xs={12} md={6} lg={12}  style={{marginBottom:"6px"}}>
                          <Typography>
                            Enter Contact
                          </Typography>
                        </Grid>

                        <Grid xs={12} md={6} lg={6} >
                        <TextField
                          required
                          type="tel"
                          name="contact"
                          placeholder="Contact No."
                          value={toSend.contact}
                          inputProps={{
                            maxlength: 12
                          }}
                          onChange={handleChange}
                          style ={{width: '100%',paddingRight:"16px"}}
                          InputProps={{ maxlength: 10,style: { fontSize: 15,width:"150%",maxLength:10} }}
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

                   OverAll  Service Feedback
                </Typography>
                <hr style={{width:"98%",border:"1px solid black",marginRight:"48px"}}/>

            <Grid xs={12} md={12} style={{marginTop:"16px"}}>

                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">1. Over All Service Expereince ?</FormLabel>

        {/* <Typography style={{paddingLeft:"16px"}}>

          <StarRating/>
        </Typography> */}

       <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value7"
       value= {toSend.value7}
      onChange={handleChange}
      >

       {/* <Rating name="value1" value={toSend.value1} onChange={handleChange} size="large" /> */}
       <FormControlLabel value="excellent" control={<Radio  size='small' />} label="Excellent" />
        <FormControlLabel value="good" control={<Radio  size='small'/>} label="Good" />
        <FormControlLabel value="average" control={<Radio  size='small'/>} label="Average" />
        <FormControlLabel value="poor" control={<Radio  size='small'/>} label="Poor" />
        
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>2. How long have been using our services ?</FormLabel>

<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
type= "radio"
name="value8"
value= {toSend.value8}
onChange={handleChange}
>

<FormControlLabel value="6-12 months" control={<Radio  size='small' />} label="6-12 Months" />
<FormControlLabel value="1-2 years" control={<Radio  size='small'/>} label="1-2 Years" />
<FormControlLabel value="more than 2+ years" control={<Radio  size='small'/>} label="More Than 2+ Years" />
<FormControlLabel value="more than 4+ years" control={<Radio  size='small'/>} label="More Than 4+ Years" />

</RadioGroup>


      </FormControl>
     
      </Grid>
      </Grid>


               

                <Grid xs={12} style={{marginLeft:"24px"}}>
                <Typography 
                style={{fontWeight:"bolder",marginTop:"16px",marginBottom:"4px",display:"inline-flex",}}>

                    Service Feedback
                </Typography>
                <hr style={{width:"98%",border:"1px solid black",marginRight:"48px"}}/>

            <Grid xs={12} md={12} style={{marginTop:"16px"}}>

                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">3. How well do our E-Lock meet yout needs?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value1"
       value= {toSend.value1}
      onChange={handleChange}

      >
       {/* <Rating name="value1" value={toSend.value1} onChange={handleChange} size="large" /> */}

        <FormControlLabel value="exceptionally well" control={<Radio  size='small'/>} label="Exceptionally Well" />
        <FormControlLabel value="adequately well"control={<Radio  size='small'/>} label="Adequately Well" />
        <FormControlLabel value="not well"  control={<Radio  size='small'/>} label="Not Well" /> 
        
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>
        4. How easy is it to navigate our website features?
      </FormLabel>

      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value2"
       value= {toSend.value2}
      onChange={handleChange}
      >
         <FormControlLabel value="extremely easy" control={<Radio  size='small'/>} label="Extremely Easy" />
        <FormControlLabel value="average" control={<Radio  size='small'/>} label="Average" />
        <FormControlLabel value="difficult" control={<Radio  size='small'/>} label="Difficult" />
       
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>
        5. How would you rate the courtesy & efficiency of Service agent?
        </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value3"
       value= {toSend.value3}
      onChange={handleChange}
      >
         <FormControlLabel value="very good" control={<Radio  size='small'/>} label="Very Good" />
        <FormControlLabel value="average" control={<Radio  size='small'/>} label="Average" />
        <FormControlLabel value="poor" control={<Radio  size='small'/>} label="Poor" />
       
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
     

      

     

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>
        6. Was your customer service issue resolved? 
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio" 
        name="value4"
       value= {toSend.value4}
       
      onChange={handleChange}
      // style={{background:"#EAEAE8",borderRadius:"16px"}}
      >
        <FormControlLabel value="yes" control={<Radio  size='small'/>} label="Yes" />
        <FormControlLabel value="no" control={<Radio  size='small'/>} label="No" />
        <FormControlLabel value="not sure" control={<Radio  size='small'/>} label="Not Sure" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>
        7. Did you find it easy to contact us?</FormLabel>
      <RadioGroup
         row
         aria-labelledby="demo-row-radio-buttons-group-label"
         type= "radio"
         name="value5"
        value= {toSend.value5}
       onChange={handleChange}

      >
        <FormControlLabel value="yes" control={<Radio  size='small'/>} label="Yes" />
        <FormControlLabel value="no" control={<Radio  size='small'/>} label="No" />
        <FormControlLabel value="not sure" control={<Radio  size='small'/>} label="Not Sure" />
      </RadioGroup>

      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginTop:"8px"}}>
        8. Which feature are the most valuable according to you?
        </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        type= "radio"
        name="value6"
       value= {toSend.value6}
      onChange={handleChange}
      >
        <FormControlLabel value="geofencing" control={<Radio  size='small'/>} label="GeoFencing" />
        <FormControlLabel value="alerts" control={<Radio  size='small'/>} label="Alerts" />
        <FormControlLabel value="reports" control={<Radio  size='small'/>} label="Reports" />
      </RadioGroup>


    </FormControl>
  

    <Grid  xs={8} md={6} lg={12} >
        <Grid xs={12} md={12} lg={12}>

        <Typography 
                style={{fontWeight:"bolder",display:"inline-flex",}}>

                  <h5>9. If there was one new feture you could suggest, what would it be and why?</h5>
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
            inputProps={{
              maxLength: 200
            }}
            placeholder="please share your feedback."
            style ={{width: '100%',paddingRight:"16px",textAlign:"left"}}
            InputProps={{style: {fontSize: 15,} }}   

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
