import React,  { Component, useState }from 'react';
import axios from "axios";
import {
  Button,Modal, Backdrop, Fade, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography,Paper, Grid,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CssBaseline, CircularProgress
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';




import BacktestForm from "./BacktestForm";
import PapertradeForm from "./PapertradeForm";
import {FilterableTable} from 'react-filterable-table';




class MyStrategies extends React.Component {
  

   constructor(props) {
        super(props);

        this.state = {
          strategies : [],
            open: [],
            papertradeOpen: []
          }

         this.fields = [
    { name: 'name', displayName: "Name", inputFilterable: true, sortable: true },
    { name: 'age', displayName: "Age", inputFilterable: true, exactFilterable: true, sortable: true },
    { name: 'job', displayName: "Occupation", inputFilterable: true, exactFilterable: true, sortable: true }
];

    }


   handleClose(index) {
    let openArr = this.state.open;
    openArr[index] = false;

    this.setState(Object.assign(this.state, {open:openArr}));
  };


 handlePapertradeClose(index) {

  let openArr = this.state.papertradeOpen;
    openArr[index] = false;

    this.setState(Object.assign(this.state, {papertradeOpen:openArr}));


    
  };
  



  componentDidMount() {


    axios.get("http://localhost:3000/voyant/api/strategy",{
        headers: {
          "x-access-token": window.localStorage.getItem("voyant-jwt-token")
        }
      })
      .then(res => {
        const strategies = res.data;
        this.setState({ strategies });
        this.state.papertradeOpen = false;

        strategies.map( (strategy,index) => {
          this.state.open[index] = false;
        });

        //alert(JSON.stringify(this.state.open))

        console.log("$$$$$$$$$");
      console.log(strategies); 


      });

        
  }


  handleBacktestSubmit(index) {

    let openArr = this.state.open;
    openArr[index] = true;

    this.setState(Object.assign(this.state, {open:openArr}));
    
    //alert(JSON.stringify(this.state.open));
    console.log("backtest submit");

  }



  handlePaperTradeSubmit(index) {

    let openArr = this.state.open;
    openArr[index] = true;

    this.setState(Object.assign(this.state, {papertradeOpen:openArr}));
    
  }


  handlePublish(id,isPublished) {

    //alert("INTO HANDLE PUBLISH"+ id)
    var data ={"published": !isPublished}

    //alert(JSON.stringify(data));
    axios.put("http://localhost:3000/voyant/api/strategy/"+id,data,{
        headers: {
          "x-access-token": window.localStorage.getItem("voyant-jwt-token")        
        }})
      .then(res => {
        const strategies = res.data; 
       // alert(strategies);

      console.log(strategies); 


      }).catch(err => {
        //alert(err);
      });

  }



 handleSubmit(){
   // alert("submitting for backtest");

  }



btForm(id,strategyType) {
  let abc = React.cloneElement(BacktestForm, {backtestStrategyId:id})

  return ( <BacktestForm backtestStrategyId={id} backtetStrategyType={strategyType}/>)
}

  
  renderStrategies = () => {

    return(



        <div>

           <TableContainer component={Paper}>
      <Table aria-label="My strategies">
        <TableHead>
          <TableRow>
            <TableCell align="right"> <b> Strategy Name </b></TableCell>
            <TableCell align="right"> <b> Test </b> </TableCell>
            <TableCell align="right"> <b> Deploy </b> </TableCell>
            <TableCell align="right"> <b> Publish </b> </TableCell>
            <TableCell align="right"> <b> Edit </b> </TableCell>
            <TableCell align="right"> <b> Monthly Clones (deployed clones) </b> </TableCell>
            <TableCell align="right"> <b> YTD Clones (deployed clones) </b> </TableCell>
            <TableCell align="right"> <b> Overall Clones (deployed clones) </b> </TableCell>

          </TableRow>
        </TableHead>

        <TableBody>




        { this.state.strategies.map((strategy,index) => 


            <TableRow key={strategy._id}>
              
              <TableCell component="th" scope="row">
               <b> {strategy.name} </b>
              </TableCell>
              <TableCell align="right">
           <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={ () =>  {this.handleBacktestSubmit(index)}}
                  >
                    Test
                  </Button>



                  <Dialog open={this.state.open[index]}  onClose={ () => {this.handleClose(index)}} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Backtest</DialogTitle>
        <DialogContent>
          <DialogContentText>
             <Typography variant="h6" align="left" component="h1">
                    Set the backtest parameters
                  </Typography>

          </DialogContentText>


          <BacktestForm  backtestStrategyId={strategy._id} backtestStrategyName= {strategy.name} backtestStrategyType={strategy.executionType} /> 

        </DialogContent>
        
      </Dialog>



      </TableCell>


      <TableCell align="right">


           <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={ () =>  {this.handlePaperTradeSubmit(index)}}
                  >
                    Deploy
                  </Button>


                  <Dialog open={this.state.papertradeOpen[index]} onClose={ () => {this.handlePapertradeClose(index)}}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Deploy</DialogTitle>
        <DialogContent>
          <DialogContentText>
             <Typography variant="h6" align="left" component="h1">
                    Set the Deployment parameters
                  </Typography>

          </DialogContentText>


          <PapertradeForm  papertradeStrategyId =  {strategy._id}/>
        </DialogContent>
        
      </Dialog>



              </TableCell>


              <TableCell align="right">

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={e=> this.handlePublish(strategy._id,strategy.published)}
                  >
                     {strategy.published?"Un-publish":"Publish"}
                  </Button>


              </TableCell>


              <TableCell>


                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={e=> this.handlePublish(strategy._id,strategy.published)}
                  >
                     Edit
                  </Button>


              </TableCell>


              <TableCell align="right">


                {strategy.monthlyClones} ({strategy.monthlyClonesDeployed})


              </TableCell>


              <TableCell align="right">


                {strategy.ytdClones} ({strategy.ytdClonesDeployed})


              </TableCell>


            <TableCell align="right">


                {strategy.overallClones} ({strategy.overallClonesDeployed})


              </TableCell>



            </TableRow>





       

       )}



    </TableBody>
      </Table>
    </TableContainer>






      </div>
      )
  }


  renderLoader = () => {
return (
    <div>
     <Typography variant="h4" align="center" component="h1" gutterBottom>
     Loading
      </Typography>
      <CircularProgress />
      </div>)
  }


  render = () => {
    return (


          <center>
    <div style={{ padding: 16 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
      </Typography>
      <br />
      <br />

      {this.state.strategies.length>0?this.renderStrategies():this.renderLoader()}

      </div>
      </center>
    )
  }
}

export default MyStrategies;