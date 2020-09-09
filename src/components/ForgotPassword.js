import React, { Component, useState } from 'react';
import axios from 'axios';
import {
  Grid, Paper, TextField, Button, Card, Typography
} from "@material-ui/core";
import { Link } from 'react-router-dom';



const ForgotPassword = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const fetchToken =  () => {
        axios.post("http://localhost:3000/voyant/api/authenticate/forgotPassword", {
            email: email,
            password: password
        }).then((response) => {
            window.localStorage.setItem("voyant-jwt-token", response.data.token);
            props.history.push('/dashboard');
        });
    };


    return (

<div>




        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>

<Paper style = {{padding:30}} elevation = {3} >
    <img src="./logo.svg" />
  <Grid item xs={12}>
     <div >


            <TextField
              fullWidth
              required
              type="email"
              label="Email"
              name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        />

              <TextField
              fullWidth
              required
              type="password"
              label="Password"
              name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        />


             <Button onClick={fetchToken} color="primary">
            Submit
          </Button>

          <Typography> Don't Have an Account? <Link to="/register"> Register </Link> </Typography>
           <Typography> Have an Account? <Link to="/signin"> Login </Link> </Typography>
           
        </div>

  </Grid>   

</Paper>
</Grid> 


</div>


       
    )
}

export default ForgotPassword;
