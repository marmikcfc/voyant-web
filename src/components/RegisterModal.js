import React, { Component, useState } from 'react';
import axios from 'axios';
import {
  Grid, Paper, TextField, Button, Card, Typography
} from "@material-ui/core";
import { Link } from 'react-router-dom';



const RegisterModal = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");


    const fetchToken =  () => {
        axios.post("http://localhost:3000/yeerd/api/authenticate/register", {
            email: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            age: age
        }).then((response) => {
            window.localStorage.setItem("voyant-jwt-token", response.data.token);
            props.history.push('/dashboard');
        });
    };


    return (





        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>

<Paper style={{padding:15}} elevation = {3} >
    <img src="./logo.svg" />

  <Grid item xs={12}>
     

   <Grid item xs={12} >
   <TextField
              fullWidth
              required
              type="text"
              label="First Name"
              name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        />
            
        </Grid>


        <Grid item xs={12} >
   <TextField
              fullWidth
              required
              type="text"
              label="Last Name"
              name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}
                        />
            
        </Grid>




        <Grid item  xs={12} >
            <TextField
              fullWidth
              required
              type="email"
              label="Email"
              name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        />
        </Grid>


            <TextField
              fullWidth
              required
              type="text"
              label="Username"
              name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                        />


             <TextField
              fullWidth
              required
              type="number"
              label="Age"
              name="age" value={age} onChange={(e) => setAge(e.target.value)}
                        />


              <TextField
              fullWidth
              required
              type="password"
              label="Password"
              name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        />

                <br />
             <Button onClick={fetchToken} color="primary">
            Submit
          </Button>

          <Typography> Have an Account? <Link to="/signin"> Login </Link> </Typography>
           
        

  </Grid>   


</Paper>
</Grid> 




       
    )
}

export default RegisterModal;
