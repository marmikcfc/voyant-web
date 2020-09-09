import React,  { Component, useState }from 'react';
import axios from "axios";

import {
  Button,Modal, Select, TextField, Backdrop, Fade, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography,Paper, Grid,
  MenuItem, InputLabel, Slider, Tooltip

} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker, 
  KeyboardDatePicker,
} from '@material-ui/pickers';




function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};







const BacktestForm = (props) => {


console.log("BACKTEST FORM PROPS  "+JSON.stringify(props));
  

/*
  const [backtestParams, setBacktestParams] = useState( {
          backtestSecurities: [],
          backtestStrategyId: backtestStrategyId.backtestStrategyId,
          initialCapital: "",
          positionSizing: "",
          takeProfit: "",
          stopLoss: "",
          frequency: ""

        });
*/


    
    const [showIndianStocks, setShowIndianStocks] = useState(true);

    const [backtestSecurities, setBacktestSecurities] = useState([]);
    const [initialCapital, setInitialCapital] = useState("");
    const [positionSizing, setPositionSizing] = useState();
    const [takeProfit, setTakeProfit] = useState("");
    const [stopLoss, setStopLoss] = useState("");
    const [frequency, setFrequency] = useState("");
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);


  

  const securities = [
            'MMM', 'AOS', 'ABT', 'ABBV', 'ACN', 'ATVI', 'AYI', 'ADBE', 'AAP', 'AMD', 'AES', 'AET', 'AMG', 'AFL', 'A', 'APD', 'AKAM', 'ALK', 'ALB', 'ARE', 'ALXN', 'ALGN', 'ALLE', 'AGN', 'ADS', 'LNT', 'ALL', 'GOOGL', 'GOOG', 'MO', 'AMZN', 'AEE', 'AAL', 'AEP', 'AXP', 'AIG', 'AMT', 'AWK', 'AMP', 'ABC', 'AME', 'AMGN', 'APH', 'APC', 'ADI', 'ANDV', 'ANSS', 'ANTM', 'AON', 'APA', 'AIV', 'AAPL', 'AMAT', 'APTV', 'ADM', 'ARNC', 'AJG', 'AIZ', 'T', 'ADSK', 'ADP', 'AZO', 'AVB', 'AVY', 'BHGE', 'BLL', 'BAC', 'BAX', 'BBT', 'BDX', 'BRK.B', 'BBY', 'BIIB', 'BLK', 'HRB', 'BA', 'BKNG', 'BWA', 'BXP', 'BSX', 'BHF', 'BMY', 'AVGO', 'BF.B', 'CHRW', 'CA', 'COG', 'CDNS', 'CPB', 'COF', 'CAH', 'KMX', 'CCL', 'CAT', 'CBOE', 'CBRE', 'CBS', 'CELG', 'CNC', 'CNP', 'CTL', 'CERN', 'CF', 'SCHW', 'CHTR', 'CVX', 'CMG', 'CB', 'CHD', 'CI', 'XEC', 'CINF', 'CTAS', 'CSCO', 'C', 'CFG', 'CTXS', 'CME', 'CMS', 'KO', 'CTSH', 'CL', 'CMCSA', 'CMA', 'CAG', 'CXO', 'COP', 'ED', 'STZ', 'GLW', 'COST', 'COTY', 'CCI', 'CSRA', 'CSX', 'CMI', 'CVS', 'DHI', 'DHR', 'DRI', 'DVA', 'DE', 'DAL', 'XRAY', 'DVN', 'DLR', 'DFS', 'DISCA', 'DISCK', 'DISH', 'DG', 'DLTR', 'D', 'DOV', 'DWDP', 'DPS', 'DTE', 'DUK', 'DRE', 'DXC', 'ETFC', 'EMN', 'ETN', 'EBAY', 'ECL', 'EIX', 'EW', 'EA', 'EMR', 'ETR', 'EVHC', 'EOG', 'EQT', 'EFX', 'EQIX', 'EQR', 'ESS', 'EL', 'RE', 'ES', 'EXC', 'EXPE', 'EXPD', 'ESRX', 'EXR', 'XOM', 'FFIV', 'FB', 'FAST', 'FRT', 'FDX', 'FIS', 'FITB', 'FE', 'FISV', 'FLIR', 'FLS', 'FLR', 'FMC', 'FL', 'F', 'FTV', 'FBHS', 'BEN', 'FCX', 'GPS', 'GRMN', 'IT', 'GD', 'GE', 'GGP', 'GIS', 'GM', 'GPC', 'GILD', 'GPN', 'GS', 'GT', 'GWW', 'HAL', 'HBI', 'HOG', 'HRS', 'HIG', 'HAS', 'HCA', 'HCP', 'HP', 'HSIC', 'HES', 'HPE', 'HLT', 'HOLX', 'HD', 'HON', 'HRL', 'HST', 'HPQ', 'HUM', 'HBAN', 'HII', 'IDXX', 'INFO', 'ITW', 'ILMN', 'INCY', 'IR', 'INTC', 'ICE', 'IBM', 'IP', 'IPG', 'IFF', 'INTU', 'ISRG', 'IVZ', 'IPGP', 'IQV', 'IRM', 'JBHT', 'JEC', 'SJM', 'JNJ', 'JCI', 'JPM', 'JNPR', 'KSU', 'K', 'KEY', 'KMB', 'KIM', 'KMI', 'KLAC', 'KSS', 'KHC', 'KR', 'LB', 'LLL', 'LH', 'LRCX', 'LEG', 'LEN', 'LUK', 'LLY', 'LNC', 'LKQ', 'LMT', 'L', 'LOW', 'LYB', 'MTB', 'MAC', 'M', 'MRO', 'MPC', 'MAR', 'MMC', 'MLM', 'MAS', 'MA', 'MAT', 'MKC', 'MCD', 'MCK', 'MDT', 'MRK', 'MET', 'MTD', 'MGM', 'KORS', 'MCHP', 'MU', 'MSFT', 'MAA', 'MHK', 'TAP', 'MDLZ', 'MON', 'MNST', 'MCO', 'MS', 'MSI', 'MYL', 'NDAQ', 'NOV', 'NAVI', 'NKTR', 'NTAP', 'NFLX', 'NWL', 'NFX', 'NEM', 'NWSA', 'NWS', 'NEE', 'NLSN', 'NKE', 'NI', 'NBL', 'JWN', 'NSC', 'NTRS', 'NOC', 'NCLH', 'NRG', 'NUE', 'NVDA', 'ORLY', 'OXY', 'OMC', 'OKE', 'ORCL', 'PCAR', 'PKG', 'PH', 'PAYX', 'PYPL', 'PNR', 'PBCT', 'PEP', 'PKI', 'PRGO', 'PFE', 'PCG', 'PM', 'PSX', 'PNW', 'PXD', 'PNC', 'RL', 'PPG', 'PPL', 'PX', 'PFG', 'PG', 'PGR', 'PLD', 'PRU', 'PEG', 'PSA', 'PHM', 'PVH', 'QRVO', 'QCOM', 'PWR', 'DGX', 'RRC', 'RJF', 'RTN', 'O', 'RHT', 'REG', 'REGN', 'RF', 'RSG', 'RMD', 'RHI', 'ROK', 'COL', 'ROP', 'ROST', 'RCL', 'SPGI', 'CRM', 'SBAC', 'SCG', 'SLB', 'STX', 'SEE', 'SRE', 'SHW', 'SPG', 'SWKS', 'SLG', 'SNA', 'SO', 'LUV', 'SWK', 'SBUX', 'STT', 'SRCL', 'SYK', 'STI', 'SIVB', 'SYMC', 'SYF', 'SNPS', 'SYY', 'TROW', 'TTWO', 'TPR', 'TGT', 'TEL', 'FTI', 'TXN', 'TXT', 'BK', 'CLX', 'COO', 'HSY', 'MOS', 'TRV', 'DIS', 'TMO', 'TIF', 'TWX', 'TJX', 'TMK', 'TSS', 'TSCO', 'TDG', 'TRIP', 'FOXA', 'FOX', 'TSN', 'USB', 'UDR', 'ULTA', 'UAA', 'UA', 'UNP', 'UAL', 'UNH', 'UPS', 'URI', 'UTX', 'UHS', 'UNM', 'VFC', 'VLO', 'VAR', 'VTR', 'VRSN', 'VRSK', 'VZ', 'VRTX', 'VIAB', 'V', 'VNO', 'VMC', 'WMT', 'WBA', 'WM', 'WAT', 'WEC', 'WFC', 'WELL', 'WDC', 'WU', 'WRK', 'WY', 'WHR', 'WMB', 'WLTW', 'WYN', 'WYNN', 'XEL', 'XRX', 'XLNX', 'XL', 'XYL', 'YUM', 'ZBH', 'ZION', 'ZTS',"SNAP", "DBX", "TWTR",];

  const indianSecurities = [
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


const securityType = [ {name: "US Equities"}, {name:"Indian Equities"}]


 const [open,setOpen] = useState(false);             
 const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);


 const handleBacktestSubmit = () => {
    setOpen(true);
    console.log("backtest submit");

  }



const handleSubmit = () => {

    //alert(JSON.stringify(props));
    let posSizing = parseInt(positionSizing)/100;

    
    const payload = {

          backtestStrategyId: props.backtestStrategyId,
          initialCapital: initialCapital,
          positionSizing: 1,
          takeProfit: takeProfit,
          stopLoss: stopLoss,
          frequency: "1min",
          start: startDate,
          end: endDate,
          strategyName: props.backtestStrategyName,
          type:props.backtestStrategyType,
          "optimizationParams":{
              "type": 1
            },
          username:"marmikpandya",
          "backtestSecurities": "GOOG",
    }

   // alert("PAyload"+JSON.stringify(payload))



    

        axios.post("http://localhost:3000/voyant/api/backtest", payload, {
        headers: {
          "x-access-token": window.localStorage.getItem("voyant-jwt-token")
        }
      })
      .then(res => {
        const resp = res.status
        if (resp == 200){

          setShowSuccessDialog(true);  
          
        }
        else{
          alert("Something went wrong")
        }


      });


   
  
  
  }


  const handleInitialCapitalInput = (e) => {
    let newValue =   e.target.value || e.target.innerText;
    setInitialCapital(newValue);
  }

const [typeOfTest, setTypeOfTest] = useState("");

const handleInput = (e,param) =>{

  let newValue =   e.target.value || e.target.innerText;

  if (param == "stopLoss"){
    setStopLoss(newValue);
  }

  else if (param == "positionSizing") {
    setPositionSizing(newValue);
  }
  else if (param == "takeProfit") {
    setTakeProfit(newValue)
  }
  else if (param == "frequency"){
    setFrequency(newValue);
  }

   else if (param == "deploy"){
    setTypeOfTest(newValue);
  }


}



const handleAutocompleteInput = (e,value, param) =>{
  let sec = e.target.value || e.target.innerText;

  if (sec == "Indian Equities") {
    setShowIndianStocks(true)
  }
  else if (sec == "US Equities"){
    setShowIndianStocks(false)
  }
  else{
    setBacktestSecurities(backtestSecurities.concat(sec));
  }
  
  

}


const handleDialogClose = () => {
  setShowSuccessDialog(false);

};


  const [startDate, setStartDate] = React.useState(new Date('2019-08-18T21:11:54'));
  const [endDate, setEndDate] = React.useState(new Date('2019-08-18T21:11:54'));

  const handleDateInput = (e,param) => {
    let date =   e.target.value || e.target.innerText;

    if (param == "start")
    {setStartDate(date);}


    if (param == "end")
    {setEndDate(date);}


  };



const handleSliderChange  = (event, newValue) => {
    setPositionSizing(newValue);
  };


  const handleStartDateChange = date => {
    setStartDate(date);
  };

 const handleEndDateChange = date => {
    setEndDate(date);
  };



const renderStocksUS = (op) => {

          return(  <Autocomplete multiple
                        options={op.map(option => option)}
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
                    />)

}


const renderStocksIN = (op) => {

          return(  <Autocomplete multiple
                        options={op.map(option => option.name)}
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
                    />)

}






  return (


          <form onSubmit={handleSubmit} noValidate>
              <Grid container alignItems="flex-start" spacing={2}>

                    <Dialog open={showSuccessDialog}  onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Backtest</DialogTitle>
        <DialogContent>
          <DialogContentText>
             <Typography variant="h6" align="left" component="h1">
                    Success!!
                  </Typography>

          </DialogContentText>

        </DialogContent>
        
      </Dialog>





              <Grid item xs={12}>
          <InputLabel id="demo-simple-select-label"> Kind of test </InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange= {e => handleInput(e,"deploy")}
        >
          <MenuItem value={"Backtest"}>Backtest</MenuItem>
          <MenuItem value={"Forward"}>Forward Test</MenuItem>
          
            

        </Select>

</Grid> 
           
   {props.backtestStrategyType==="paas"?null:(

                      <Grid item xs={12}>

                <Autocomplete 
                        options={securityType.map(option => option.name)}
                        onChange= {handleAutocompleteInput}
                        renderInput={params => (
                    <TextField
                      {...params}
                      fullWidth
                        required
                        type="text"
                      label="Exchange"
                      margin="normal"
                      variant="outlined"
                      
                    />  )}
                    />


              </Grid>


                )}
                  

             {props.backtestStrategyType==="paas"?null:(

                                 <Grid item xs={12}>

                {showIndianStocks? renderStocksIN(indianSecurities): renderStocksUS(securities)}

          </Grid>

                )}
                  


             {props.backtestStrategyType==="paas"?null:(
                  <Typography gutterBottom>Position Sizing</Typography>

                )}
                  

                                  


             {props.backtestStrategyType==="paas"?null:(
                  <Grid item xs={12}>

            <Slider ValueLabelComponent={ValueLabelComponent} value={positionSizing} onChange={handleSliderChange}  aria-labelledby="continuous-slider" />

      
          </Grid>

                )}



 <Grid item xs={6}>



  <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={startDate}
              onChange={handleStartDateChange}

          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

   </MuiPickersUtilsProvider>


</Grid>

         <Grid item xs={6}>

           <MuiPickersUtilsProvider utils={DateFnsUtils}>


        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={endDate}
              onChange={handleEndDateChange}

          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

           </MuiPickersUtilsProvider>


        </Grid>



  <Grid item xs={12}>

            <TextField
              fullWidth
              required
              type="text"
              label="Initial Capital"
              onInput= {e => handleInitialCapitalInput(e)}
                        />
          </Grid>



    <Grid item xs={12}>

            <TextField
              fullWidth
              required
              type="number"
              label="Stop Loss"
              onInput= {e => handleInput(e,"stopLoss")}
                        />
          </Grid>



    <Grid item xs={12}>

            <TextField
              fullWidth
              required
              type="number"
              label="Take Profit"
              onInput= {e => handleInput(e,"takeProfit")}
                        />
          </Grid>


                </Grid>




                <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
                </form>
         





          
    )
}




export default BacktestForm;