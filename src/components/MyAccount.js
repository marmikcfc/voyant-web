import React, { Component, useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";
import { Checkbox, Radio, Select } from "final-form-material-ui";
import {
    Typography,
    Paper,
    Link,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
    TextField,
    Fab,
    Box,
    Switch,
    Divider
} from "@material-ui/core";


class MyAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }


    componentDidMount() {


    axios.get("http://localhost:3000/voyant/api/users",{
        headers: {
          "x-access-token": window.localStorage.getItem("voyant-jwt-token")
        }
      })
      .then(res => {
        alert(JSON.stringify(res));

      });

        
  }

    render() {
        return (
               <center>
    <div style={{ padding: 20, maxWidth:400 }}>
    	<br />

    	

      <CssBaseline />
    <br />


    	<Paper container direction="row" style={{ padding: 20, width:300 }}>
    	<Typography  align="left" component="h6" > Username:  {'\u00A0'} {'\u00A0'}  <TextField id="standard-basic" value="marmikpandya"/>
    	</Typography>   

    	<br />
    	<Typography  align="left" component="h6" > Password:  {'\u00A0'} {'\u00A0'}  <TextField id="standard-basic" type="password"
  value="marmikpandya"/>
    	</Typography>  

    	<br />


    	<Typography  align="left" component="h6" > Alpaca Key ID:  {'\u00A0'} {'\u00A0'}  <TextField id="standard-basic" type="password"
  value="PKYQWOK17NKLPTIEC6C9"/>
    	</Typography>  

    	<br />

    	<Typography  align="left" component="h6" > Alpaca Secret Key:  {'\u00A0'} {'\u00A0'}  <TextField id="standard-basic" type="password"
  value="PeQV3kw7ez7DuVI67XMYzS4A2fyYJdoS4/b7TCcS"/>
    	</Typography>

    	<br />

    	
    	<Typography  align="left" component="h6" > Kite-connect API Key	:  {'\u00A0'} {'\u00A0'}  <TextField id="standard-basic" type="password"
  value="PKYQWOK17NKLPTIEC6C9"/>
    	</Typography>  

    	
    	<br />
    	   

           <Button onClick={this.handleSubmit} color="primary">
            Submit Changes 
          </Button>

    	</Paper>

    	</div>
    	</center>
        );
    }
}

export default MyAccount;