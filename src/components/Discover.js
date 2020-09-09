import React,  { Component, useState }from 'react';
import axios from "axios";

import {
  Button,Modal, Select, TextField, Backdrop, Fade, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography,Paper, Grid,
  MenuItem, InputLabel, Divider, Card, CardContent, CardHeader,Fab, CircularProgress

} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { findDOMNode } from "react-dom";
import $ from "jquery";
import CloneForm from './CloneForm';

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";




const Discover = () => {
  


  const [results, setResults]  = useState([]);
  const [payload,setPayload] = useState({});
  const [discoverSecurities, setDiscoverSecurities] = useState([]);
  const [showResults, setShowResults]  = useState(true);
  const [queryFired, setQueryFired] = useState(false);
 


  const [openDialog, setOpenDialog] = useState(false);
  const [cloneName, setCloneName] = useState("");


  const [filterList,setFilterList] = useState([]);


  const securities = [
        {  name: "SNAP"},
        {  name: "DBX"},
        {  name: "AAPL"},
        {  name: "FB"},
        {  name: "GOOG"},
        {  name: "MSFT"},
        {  name: "TWTR"},
        {  name: "NFLX"},
        { name: "ADANIPORTS"},
    { name: "ASIANPAINT"},
    { name: "AXISBANK"},
    { name: "BAJAJ-AUTO"}, 
    { name: "BAJFINANCE"},
    { name: "BAJAJFINSV"},
    { name: "BPCL"},   
    { name: "BHARTIARTL"},
    { name: "INFRATEL"},
    { name: "BRITANNIA"},
    { name: "CIPLA"},
    { name: "COALINDIA"},
    { name: "DRREDDY"},
    { name: "EICHERMOT"}, 
    { name: "GAIL"},
    { name: "GRASIM"},
    { name: "HCLTECH"}, 
    { name: "HDFCBANK"},
    { name: "HEROMOTOCO"},
    { name: "HINDALCO"},
    { name: "HINDUNILVR"},
    { name: "HDFC"},
    { name: "ICICIBANK"},
    { name: "ITC"},
    { name: "IOC"},
    { name: "INDUSINDBK"},
    { name: "INFY"},
    { name: "JSWSTEEL"},
    { name: "KOTAKBANK"}, 
    { name: "LT"},
    { name: "M&M"},
    { name: "MARUTI"},
    { name: "NTPC"},
    { name: "NESTLEIND"},
    { name: "ONGC"},
    { name: "POWERGRID"},
    { name: "RELIANCE"},
    { name: "SBIN"},
    { name: "SUNPHARMA"},
    { name: "TCS"},
    { name: "TATAMOTORS"},
    { name: "TATASTEEL"},
    { name: "TECHM"},
    { name: "TITAN"},
    { name: "UPL"},
    { name: "ULTRACEMCO"},
    { name: "VEDL"},
    { name: "WIPRO"},
    { name: "YESBANK"},
    { name: "ZEEL"},
    { name: "AUROPHARMA"},
    { name: "BIOCON"},
    { name: "CADILAHC"},
    { name:"CIPLA"},
    { name: "DIVISLAB"},
    { name: "DRREDDY"},
    { name: "GLENMARK"},
    { name: "LUPIN"},
    { name: "PEL"},
    { name:"SUNPHARMA"}

        ];

  const filters = [
        {  name: "Security", func:"security"},
        {  name: "Total Return", func: "totalReturn"},
        {  name: "Max Drawdown",func: "maxDrawdown"},
        {  name: "Drawdown Duration", func:"drawdownDuration"},
        {  name: "CAGR", func:"cagr"},
        {  name: "Sharpe Ratio", func:"sharpe"},
        {  name: "Volatility", func: "volatility"},
        {  name: "Alpha", func: "alpha"},
        {  name: "Beta", func:"beta"},
        {  name: "Calmar Ratio", func:"calmar"},
        {  name: "Sortino Ratio", func: "sortino"},
        {  name: "Kurtosis", func: "kurtosis"},
        {  name: "Skew", func: "skew"}];

  const [filtersToShow,setFiltersToShow] = useState({
              "security": false,
              "beta": false,
              "alpha": false,
              "kurtosis": false, 
              "skew": false, 
              "volatility": false, 
              "calmar": false, 
              "sortino": false, 
              "cagr": false, 
              "drawdownDuration": false, 
              "maxDrawdown": false, 
              "totalReturn": false,
              "sharpe": false
        });


 const handleSubmit = () => {

    let req = Object.assign( payload ,{"backtestSecurities" : discoverSecurities})

    setQueryFired(true);
    //alert(JSON.stringify(req));

    axios.post("http://localhost:3000/voyant/api/search", req, {
        headers: {
          "x-access-token": window.localStorage.getItem("voyant-jwt-token")
        }
      })
      .then(res => {
        const resp = res.data;

        setResults(resp);
        //alert(resp.length);
        setShowResults(true);
        setQueryFired(false);
        
      }).catch(err => {
        //alert(err);
      });

  }


const handleInput = (e,param) =>{


  switch (param) {
       

        case "totalReturnMax":
         
          if(!(payload.totalReturn) ){
          payload.totalReturn = {$lt:0, $gt:0}

         }
         payload.totalReturn.$lt= parseFloat(e.target.value || e.target.innerText)

         break;

        case "totalReturnMin":
         if(!(payload.totalReturn) ){
          payload.totalReturn = {$lt:0, $gt:0}

         }
         payload.totalReturn.$gt = parseFloat(e.target.value || e.target.innerText)
         break;

        case "sharpeMax":
         if(!(payload.sharpeRatio) ){
          payload.sharpeRatio = {$lt:0, $gt:0}

         }
         payload.sharpeRatio.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "sharpeMin":

         if(!(payload.sharpeRatio) ){
          payload.sharpeRatio = {$lt:0, $gt:0}

         }
         payload.sharpeRatio.$gt = parseFloat(e.target.value || e.target.innerText)
         break;


          case "cagrMax":
         if(!(payload.cagr) ){
          payload.cagr = {$lt:0, $gt:0}

         }
         payload.cagr.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "cagrMin":

         if(!(payload.cagr) ){
          payload.cagr = {$lt:0, $gt:0}

         }
         payload.cagr.$gt = parseFloat(e.target.value || e.target.innerText)
         break;

        
         case "maxDrawdownMax":
         if(!(payload.maxDrawdown) ){
          payload.maxDrawdown = {$lt:0, $gt:0}

         }
         payload.maxDrawdown.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "maxDrawdownMin":

         if(!(payload.maxDrawdown) ){
          payload.maxDrawdown = {$lt:0, $gt:0}

         }
         payload.maxDrawdown.$gt = parseFloat(e.target.value || e.target.innerText)
         break;



         case "drawdownDurationMax":
         if(!(payload.drawdownDuration) ){
          payload.drawdownDuration = {$lt:0, $gt:0}

         }
         payload.drawdownDuration.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "drawdownDurationMin":

         if(!(payload.drawdownDuration) ){
          payload.drawdownDuration = {$lt:0, $gt:0}

         }
         payload.drawdownDuration.$gt = parseFloat(e.target.value || e.target.innerText)
         break;


            case "volatilityMax":
         if(!(payload.volatility) ){
          payload.volatility = {$lt:0, $gt:0}

         }
         payload.volatility.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "volatilityMin":

         if(!(payload.volatility) ){
          payload.volatility = {$lt:0, $gt:0}

         }
         payload.volatility.$gt = parseFloat(e.target.value || e.target.innerText)
         break;

         case "betaMax":
         if(!(payload.beta) ){
          payload.beta = {$lt:0, $gt:0}

         }
         payload.beta.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "betaMin":

         if(!(payload.beta) ){
          payload.beta = {$lt:0, $gt:0}

         }
         payload.beta.$gt = parseFloat(e.target.value || e.target.innerText)
         break;

          case "alphaMax":
         if(!(payload.alpha) ){
          payload.alpha = {$lt:0, $gt:0}

         }
         payload.alpha.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "alphaMin":

         if(!(payload.alpha) ){
          payload.alpha = {$lt:0, $gt:0}

         }
         payload.alpha.$gt = parseFloat(e.target.value || e.target.innerText)
         break;

         case "kurtosisMax":
         if(!(payload.kurtosis) ){
          payload.kurtosis = {$lt:0, $gt:0}

         }
         payload.kurtosis.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "kurtosisMin":

         if(!(payload.kurtosis) ){
          payload.kurtosis = {$lt:0, $gt:0}

         }
         payload.kurtosis.$gt = parseFloat(e.target.value || e.target.innerText)
         break;

          case "skewMax":
         if(!(payload.skew) ){
          payload.skew = {$lt:0, $gt:0}

         }
         payload.skew.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "skewMin":

         if(!(payload.skew) ){
          payload.skew = {$lt:0, $gt:0}

         }
         payload.skew.$gt = parseFloat(e.target.value || e.target.innerText)
         break;

         case "calmarMax":
         if(!(payload.calmar) ){
          payload.calmar = {$lt:0, $gt:0}

         }
         payload.calmar.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "calmarMin":

         if(!(payload.calmar) ){
          payload.calmar = {$lt:0, $gt:0}

         }
         payload.calmar.$gt = parseFloat(e.target.value || e.target.innerText)
         break;

         case "sortinoMax":
         if(!(payload.sortino) ){
          payload.sortino = {$lt:0, $gt:0}

         }
         payload.sortino.$lt= parseFloat(e.target.value || e.target.innerText)
         break;

        case "sortinoMin":

         if(!(payload.sortino) ){
          payload.sortino = {$lt:0, $gt:0}

         }
         payload.sortino.$gt = parseFloat(e.target.value || e.target.innerText)
         break;





      }
}


const handleFilterListInput = (e, value, index) =>{



    var filterType = e.target.value || e.target.innerText;
    

    let filterFunc = filters.filter(elem => elem.name == filterType )[0];

    filterType = filterFunc["func"];

    //alert(JSON.stringify(filterFunc));

    //alert(filterFunc["func"]);

      if (filterType == "security"){ 
        setFilterList(filterList.concat(filterType));
             setFiltersToShow(Object.assign(filtersToShow,{"security":true}));
          }

      else if (filterType == "sharpe"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"sharpe":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"sharpe":true}));
          }

      else if (filterType == "beta"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"beta":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"beta":true}));
          }

      else if (filterType == "alpha"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"alpha":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"alpha":true}));
          }

      else if (filterType == "kurtosis"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"kurtosis":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"kurtosis":true}));
          }

      else if (filterType == "skew"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"skew":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"skew":true}));
          }

      else if (filterType == "volatility"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"volatility":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"volatility":true}));
          }

      else if (filterType == "calmar"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"calmar":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"calmar":true}));
          }

      else if (filterType == "sortino"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"sortino":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"sortino":true}));
          }

      else if (filterType == "cagr"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"cagr":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"cagr":true}));
          }

      else if (filterType == "maxDrawdown"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"maxDrawdown":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"maxDrawdown":true}));
          }

      else if (filterType == "drawdownDuration"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"drawdownDuration":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"drawdownDuration":true}));
          }

      else if (filterType == "totalReturn"){
        setFilterList(filterList.concat(filterType));
              setPayload(Object.assign(payload,{"totalReturn":{$lt:0, $gt:0}}));
              setFiltersToShow(Object.assign(filtersToShow,{"totalReturn":true}));
          }

       //alert(JSON.stringify(filtersToShow));
      

}



const handleAutocompleteInput = (e,value) =>{
    let sec = e.target.value || e.target.innerText
    setDiscoverSecurities(discoverSecurities.concat(sec));


}





const handleOpen = () => {
  setOpenDialog(true);
}


const handleClose = () => {
  setOpenDialog(false);
}


const handleCloneInput = (e) => {
    var name = e.target.value || e.target.innerText;
   setCloneName(name);

}


const handleClone = (result) => {
 // alert('#####.     '+ result);
}


const handleReset = () => {
  setFilterList([]);
  setFiltersToShow({
              "security": false,
              "beta": false,
              "alpha": false,
              "kurtosis": false, 
              "skew": false, 
              "volatility": false, 
              "calmar": false, 
              "sortino": false, 
              "cagr": false, 
              "drawdownDuration": false, 
              "maxDrawdown": false, 
              "totalReturn": false,
              "sharpe": false
        })
}

const renderSecurityArgs =() => {

  return (
                  <Grid item xs={12}>
  
                  <br />
                  <br />
              <Autocomplete multiple
                options={securities.map(option => option.name)}
                onChange= {handleAutocompleteInput}
  
                renderInput={params => (
            <TextField
              {...params}
              fullWidth
                required
                type="text"
              label="Security"
              margin="normal"
              variant="outlined"
              
            />  )}
            />
            </Grid>)
}

const renderArgs = (type) => {
 return ( <Grid container spacing={3} direction="row" alignItems="flex-start">
 
   <Grid item xs={6}>
 
             <TextField
               fullWidth
               required
               type="number"
               label={type+" (Min)"}
               onInput= {e => handleInput(e,type+"Min")}
                         />
           </Grid>
 
   <Grid item xs={6}>
 
 
             <TextField
               fullWidth
               required
               type="number"
               label={type+" (Max)"}
               onInput= {e => handleInput(e,type+"Max")}
                         />
           </Grid>
 
 
   </Grid>)
}


const renderLoader = () => {
return (
    <div>
     <Typography variant="h4" align="center" component="h1" gutterBottom>
     Loading
      </Typography>
      <CircularProgress />
      </div>)
  }


const renderFilters = () => {
    return (
               <Grid container spacing = {2} direction = "row" alignItems="flex-start">
          {filtersToShow["security"]? renderSecurityArgs():null}
          {filtersToShow["totalReturn"]? renderArgs("totalReturn"):null}
          {filtersToShow["maxDrawdown"]? renderArgs("maxDrawdown"):null}
          {filtersToShow["drawdownDuration"]? renderArgs("drawdownDuration"):null}
          {filtersToShow["cagr"]? renderArgs("cagr"):null}
          {filtersToShow["volatility"]? renderArgs("volatility"):null}
          {filtersToShow["calmar"]? renderArgs("calmar"):null}
          {filtersToShow["sortino"]? renderArgs("sortino"):null}
          {filtersToShow["sharpe"]? renderArgs("sharpe"):null}
          {filtersToShow["beta"]? renderArgs("beta"):null}
          {filtersToShow["alpha"]? renderArgs("alpha"):null}
          {filtersToShow["skew"]? renderArgs("skew"):null}
          {filtersToShow["kurtosis"]? renderArgs("kurtosis"):null}


         
        

               </Grid>



    )


  
}

const renderResults = () => {
  return results.map( result => (
                 
                 <Grid item xs={12} sm={6} md={4} key={results.indexOf(result)}>
       
                  <Card  >
       
                  <CardHeader title= {result.name}/> 
       
                   <CardContent>
               <Typography color="textSecondary" align="left" gutterBottom>
                   Returns: {result.totalReturn}
               </Typography>
               <Typography color="textSecondary" align="left" gutterBottom>
                   Security: SNAP
               </Typography>
       
                <Typography color="textSecondary" align="left" gutterBottom>
                   Backtest Start Date: 2017-03-02
               </Typography>
       
                <Typography color="textSecondary" align="left" gutterBottom>
                   Backtest End Date: 2018-12-31
               </Typography>
        
               <Typography color="textSecondary" align="left" gutterBottom>
                   Backtest Frequency: daily
               </Typography>
        
       
                      <Button onClick={handleOpen} color="primary">
                   Clone
                 </Button>
                    </CardContent>
       
                  </Card>
       
       
                   <Dialog open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
               <DialogTitle id="form-dialog-title">Backtest</DialogTitle>
               <DialogContent>
                 <DialogContentText>
                    <Typography variant="h6" align="left" component="h1">
                           Clone 
                         </Typography>
       
       
                         <CloneForm strategy = {result} />
                 </DialogContentText>
       
       
       
               </DialogContent>
               
             </Dialog>
       
       
       
       
                 </Grid>
                 

                 ))}


    return (

      <div>

      <center>
      <Paper >

          <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start" style={{ maxWidth:'80%'}}>


            <Grid item xs={12}>

                <br />
                <br />
            <Autocomplete multiple
              options={filters.map(option => option.name)}
              onChange= {handleFilterListInput}
              value={filterList} 
              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Filters"
            margin="normal"
            variant="outlined"
            
          />  )}
          />
          </Grid>


                {renderFilters()}


<br />
<br />
        
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" >

        <Grid item xs={1}>
           <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>

        </Grid>

        <Grid item xs={1}>
           <Button onClick={handleReset} color="primary">
            Reset
          </Button>

        </Grid>

               
          </Grid>

  </Grid>




                </form>



         


</Paper>



       </center>



<br />
<br />





<Grid id="results" container spacing={2} direction="row" justify="flex-start" alignItems="flex-start" >


<Divider />


<br />

 {queryFired? renderLoader() : renderResults()}



</Grid>



 

</div>


        	
    )
  }


export default Discover;