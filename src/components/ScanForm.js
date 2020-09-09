import React, { Component, useState, useEffect } from "react";
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
    InputLabel,
    Box,
    Switch
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
// Picker
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    TimePicker,
    DatePicker
} from "@material-ui/pickers";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { findDOMNode } from "react-dom";
//import $ from "jquery";
//import IndicatorArg from './IndicatorArg';
import { makeStyles } from '@material-ui/core/styles';
import ExperimentalScan from './ExperimentalScan';



const uuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};



/*
Lyft sentiment is Directly Propotional to Uber Sentiment

Lyft Sentiment is Direct

*/


const ScanForm = () => {



    // VARIABLE DEFINITION
    const [argsToShow, setArgsToShow] = useState([{
        id: uuid(),
        "percent": false,
        "ma": false,
        "number": false
    }]);



    const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });



    const [scanSecurities, setScanSecurities] = useState([]);



    const [indicatorArgsToShow, setIndicatorArgsToShow] = useState([{
        id: uuid(),
        "movingAvg": false,
        "momentumIntArgs": false,
        "stochf": false,
        "stoch": false,
        "sentiment": false,
        "ultosc": false,
        "willr": false,
        "mfi": false,
        "osc": false,
        "ohlcv": false,
        "acc_osc": false,
        "bop": false,
        "adx": false,
        "cci": false,
        "demarker": false,
        "donchian": false,
        "macd": false,
        "parSar": false,
        "supertrend": false,
        "T3": false,
        "aroonUp": false,
        "aroonDown": false,
        "aroonOsc": false,
        "ichimokuA": false,
        "ichimokuB": false,
        "ichimokuBase": false,
        "vortexPos": false,
        "vortexNeg": false,
        "obv": false,
        "fi": false,
        "adsoc": false,
        "ad": false,
        "fi": false,
        "lowerBollinger": false,
        "upperBollinger": false

    }])



    const [name, setName] = useState("");

    const [frequency, setFrequency] = useState("");

    const [primaryStock, setprimaryStock] = useState("");



    const [indicatorScanRules, setIndicatorScanRules] = useState([{
        id: uuid(),
        firstIndicator: "",
        secondIndicator: "", 
        firstIndicatorArgs: {},
        secondIndicatorArgs: {},
        comparator: ""
    }]);



    const indicators = [
        { func: "ema", name: "Exponential Moving Average(EMA)" },
        { func: "sma", name: "Simple Moving Average(SMA)" },
        { func: "wma", name: "Weighted Moving Average(WMA)" },
        { func: "kama", name: "Kauffman Moving Average(KAMA)" },
        { func: "dema", name: "Dual exponential Moving Average(DEMA)" },
        { func: "tema", name: "Triple exponential Moving Average(TEMA)" },
        { func: "mom", name: "Momentum" },
        { func: "ppo", name: "Percentage Price Oscillator" },
        { func: "apo", name: "Absolute Price Oscillator" },
        { func: "ao", name: "Awesome Oscillator" },
        { func: "roc", name: "Rate of Change" },
        { func: "rsi", name: "Relative Strength Index" },
        { func: "rocr", name: "Rate-of-Change Ratio" },
        { func: "willr", name: "Williams %R" },
        { func: "ohlcv", name: "open" },
        { func: "ohlcv", name: "close" },
        { func: "ohlcv", name: "high" },
        { func: "ohlcv", name: "low" },
        { func: "ohlcv", name: "volume" },
        { func: "accelerator_oscillator", name: "Accelerator Oscillator" },
        { func: "adx", name: "Average Directional Index" },
        { func: "aroon_up", name: "Aroon Up" },
        { func: "aroon_down", name: "Aroon Down" },
        { func: "aroonosc", name: "Aroon Oscillator" },
        { func: "bop", name: "Balance of Power" },
        { func: "cci", name: "commodity channel index" },
        { func: "de_marker", name: "DeMarker" },
        { func: "donchian_channel", name: "Donchian Channel" },
        { func: "ichimoku_a", name: "Ichimoku A" },
        { func: "ichimoku_b", name: "Ichimoku B" },
        { func: "ichimoku_base", name: "Ichimoku Base" },
        { func: "macd", name: "Moving Average Convergence Divergence (MACD)" },
        { func: "parabolic_sar", name: "ParabolicSAR" },
        { func: "supertrend", name: "SuperTrend" },
        { func: "t3", name: "T3" },
        { func: "trix", name: "Trix" },
        { func: "trima", name: "Triangular Moving Average" },
        { func: "vortex_pos", name: "Vortex Indicator (VI) Positive" },
        { func: "vortex_neg", name: "Vortex Indicator (VI) Negative" },
        { func: "natr", name: "Normalized Average True Range (NATR)" },
        { func: "atr", name: "Average True Range" },
        { func: "upper_bbands", name: "Upper Bollinger Bands" },
        { func: "lower_bbands", name: "Lower Bollinger Bands" },
        { func: "obv", name: "On Balance Volume" },
        { func: "fi", name: "Force Index (FI)" },
        { func: "adsoc", name: "Accumulation Distribution Oscillator" },
        { func: "ad", name: "Accumulation Distribution" },
        { func: "sentiment", name: "News Sentiment" },
        { func: "stochf", name: "Fast Stochastic" },
        { func: "stoch", name: "Stochastic RSI" }
    ];



    const securities = [
        { name: "SNAP" },
        { name: "DBX" },
        { name: "AAPL" },
        { name: "FB" },
        { name: "GOOG" },
        { name: "MSFT" },
        { name: "TWTR" },
        { name: "NFLX" },
        { name: "SPY" },
        { name: "UBER" },
        { name: "LYFT" }

    ];




    const frequencies = [
        { name: "1min" },
        { name: "5min" },
        { name: "15min" },
        { name: "60min" },
        { name: "Daily" },
        { name: "Weekly" },
        { name: "Monthly" }
    ];



    const comparators = [
        { name: "greater_than" },
        { name: "smaller_than" },
        { name: "equal" },
        { name: "crosses_above" },
        { name: "crosses_below" },
        { name: "is_up_by" },
        { name: "is_down_by" }
    ];



    const feed = [
        { name: "open" },
        { name: "high" },
        { name: "low" },
        { name: "close" },
        { name: "volume" },
        { name: "OBV" },
        { name: "AD" }
    ];



    const maTypes = [
        { func: "ema", name: "Exponential Moving Average(EMA)" },
        { func: "sma", name: "Simple Moving Average(SMA)" },
        { func: "wma", name: "weighted Moving Average(WMA)" },
        { func: "kama", name: "Kauffman Moving Average(KAMA)" },
        { func: "dema", name: "dual exponential Moving Average(DEMA)" },
        { func: "tema", name: "triple exponential Moving Average(TEMA)" }
    ];


    const sentimentVal = [
        { num: 5, name: "Highly Positive" },
        { num: 4, name: "Positive" },
        { num: 3, name: "Neutral" },
        { num: 2, name: "Negative" },
        { num: 1, name: "Highly Negative" },
    ];


    const ichimokuAArgs = [

        { func: "ohlcv", name: "close" },
        { func: "ichimoku_b", name: "ichimokuB" },
        { func: "ichimoku_base", name: "ichimokuBase" }

    ];


    const ichimokuBArgs = [

        { func: "ohlcv", name: "close" },
        { func: "ichimoku_a", name: "ichimokuA" },
        { func: "ichimoku_base", name: "ichimokuBase" }

    ];


    const ichimokuBaseArgs = [

        { func: "ohlcv", name: "close" },
        { func: "ichimoku_a", name: "ichimokuA" },
        { func: "ichimoku_b", name: "ichimokuB" }

    ];






    // UTIL Functions


    const handleIndicatorArgChange = (event, index, obj, ind, field) => {


        if (ind == "indicator1") {

            indicatorScanRules[index]["firstIndicatorArgs"][field] = event.target.value || event.target.innerText;




        } else if (ind == "indicator2") {

            indicatorScanRules[index]["secondIndicatorArgs"][field] = event.target.value || event.target.innerText;


        } else if (ind == "indicator2Val") {

            indicatorScanRules[index]["secondIndicator"] = event.target.value || event.target.innerText;
        } else if (ind == "indicator1Aroon") {


            indicatorScanRules[index]["firstIndicatorArgs"][field] = event.target.value || event.target.innerText;
            indicatorScanRules[index]["secondIndicatorArgs"][field] = event.target.value || event.target.innerText;
        }
    }

    const handleArrayChange = (event, index, obj, field) => {

        let movingAvgIndicators = ['ema', 'sma', 'wma', 'kama', 'dema', 'tema', 'trima', 'trix'];

        let momentumIntegerIndicators = ["mom", "rocr", "rsi", "roc"];

        let stochfIndicator = 'stochf';
        let stochRSI = 'stoch';
        let sent = 'sentiment';
        let ultosc = 'ultosc';
        let willr = 'willr';
        let mfi = 'mfi';
        let oscIndicators = ['ao', 'apo', 'ppo'];
        let ohlcvIndicators = 'ohlcv';
        let ao = 'accelerator_oscillator';
        let adx = 'adx';
        let bop = 'bop';
        let cci = "cci";
        let demarker = "de_marker";
        let donchian = "donchian_channel";
        let macd = "macd";
        let parSar = "parabolic_sar";
        let supertrend = "supertrend";
        let t3 = "t3";
        let aroonUp = "aroon_up";
        let aroonDown = "aroon_down";
        let aroonOsc = "aroonosc";
        let ichimokuA = "ichimoku_a";
        let ichimokuB = "ichimoku_b";
        let ichimokuBase = "ichimoku_base";
        let vortexPos = "vortex_pos";
        let vortexNeg = "vortex_neg";
        let fi = "fi";
        let obv = "obv";
        let adsoc = "adsoc";
        let ad = "ad";
        let bbBandsUp = "upper_bbands";
        let bbBandsLow = "lower_bbands";


        if (field == "indicator1") {

            let indicatorName = event.target.value || event.target.innerText;


            var ind = indicators.find(indicator => indicator.name === indicatorName);


            let indicatorFunc = ind.func;
            //alert(indicatorFunc);



            if (movingAvgIndicators.indexOf(indicatorFunc) != -1) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": indicatorFunc,
                        "firstIndicatorArgs": { "n": -1, "price": "" },
                        "secondIndicatorArgs": { "n": -1, "price": "" }

                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "movingAvg": true
                    })));



            } else if (momentumIntegerIndicators.indexOf(indicatorFunc) != -1) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1, "price": "", "col":"mom" },

                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "momentumIntArgs": true
                    })));

            } else if (indicatorFunc == stochfIndicator) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "fast_k_n": -1, "fast_d_n": -1, "fast_d_ma_type": "sma" },

                    })));




                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stochf": true
                    })));
            } else if (indicatorFunc == stochRSI) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1, "ma_type": "sma", "ma_n": -1 },

                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stoch": true
                    })));

            } else if (indicatorFunc == sent) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",

                    })));




                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "sentiment": true
                    })));


            } else if (indicatorFunc == ultosc) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));




                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ultosc": true
                    })));

            } else if (indicatorFunc == willr) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1 },

                    })));



                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "willr": true
                    })));

            } else if (indicatorFunc == mfi) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1 },

                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "mfi": true
                    })));


            } else if (oscIndicators.indexOf(indicatorFunc) != -1) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "fast_period": -1, "slow_period": -1, "ma_type": "sma" },

                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "osc": true
                    })));


            } else if (indicatorFunc == ohlcvIndicators) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1 },

                    })));

                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ohlcv": true
                    })));

            } else if (indicatorFunc == ao) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "secondIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1, "ma_type": "sma" },

                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ao": true
                    })));


            } else if (indicatorFunc == adx) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1 },

                    })));

                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adx": true
                    })));


            } else if (indicatorFunc == bop) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": ""

                    })));

                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "bop": true
                    })));
            } else if (indicatorFunc == cci) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1, "c": 0.15 }
                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "cci": true
                    })));
            } else if (indicatorFunc == demarker) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "period": -1 }
                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "demarker": true
                    })));
            } else if (indicatorFunc == donchian) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1 }
                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "donchian": true
                    })));
            } else if (indicatorFunc == macd) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "fast_period": -1, "slow_period": -1, "signal_period": -1 }
                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "macd": true
                    })));
            } else if (indicatorFunc == parSar) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "initial_af": 0.02, "step_af": 0.02, "end_af": 0.2 }
                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "parSar": true
                    })));
            } else if (indicatorFunc == supertrend) {



                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "period": 7, "multiplier": 3 }
                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "supertrend": true
                    })));
            } else if (indicatorFunc == t3) {



                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": indicatorFunc,
                        "firstIndicatorArgs": { "n": -1, "v_factor": 0.7 },
                        "secondIndicatorArgs": { "n": -1, "v_factor": 0.7 }
                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "T3": true
                    })));
            } else if (indicatorFunc == aroonUp) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "aroon_down",
                        "firstIndicatorArgs": { "n": -1 },
                        "secondIndicatorArgs": { "n": -1 }
                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonUp": true
                    })));

            } else if (indicatorFunc == aroonDown) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "aroon_up",
                        "firstIndicatorArgs": { "n": -1 },
                        "secondIndicatorArgs": { "n": -1 }
                    })));




                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonDown": true
                    })));
            } else if (indicatorFunc == aroonOsc) {



                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1 },
                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonOsc": true
                    })));
            } else if (indicatorFunc == ichimokuA) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n1": -1, "n2": -1 }
                    })));




                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuA": true
                    })));

            } else if (indicatorFunc == ichimokuB) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n3": -1, "n2": -1 }
                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuB": true
                    })));

            } else if (indicatorFunc == ichimokuBase) {


                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": {"n2": -1 }
                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuBase": true
                    })));

            } else if (indicatorFunc == vortexPos) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "vortex_neg",
                        "firstIndicatorArgs": { "n": -1 },
                        "secondIndicatorArgs": { "n": -1 }
                    })));




                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexPos": true
                    })));

            } else if (indicatorFunc == vortexNeg) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "vortex_pos",
                        "firstIndicatorArgs": { "n": -1 },
                        "secondIndicatorArgs": { "n": -1 }
                    })));




                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexNeg": true
                    })));
            } else if (indicatorFunc == obv) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "secondIndicatorArgs": { "n": -1, "price":"obv" }
                    })));

                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "obv": true
                    })));


            } else if (indicatorFunc == ad) {

                  setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "secondIndicatorArgs": { "n": -1, "price":"ad" }
                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ad": true
                    })));

            } else if (indicatorFunc == fi) {

                 setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "n": -1 }
                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "fi": true
                    })));
            } else if (indicatorFunc == adsoc) {


                 setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "fast_period": -1, "slow_period":-1 }
                    })));


                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adsoc": true
                    })));

            } else if (indicatorFunc == bbBandsUp) {

                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));



                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "upperBollinger": true
                    })));
            } else if (indicatorFunc == bbBandsLow) {



                setIndicatorScanRules(
                    indicatorScanRules.filter(arg => indicatorScanRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "firstIndicator": indicatorFunc,
                        "secondIndicator": "",
                        "firstIndicatorArgs": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));

                
                setIndicatorArgsToShow(
                    indicatorArgsToShow.filter(arg => indicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "lowerBollinger": true
                    })));
            }


        }





        if (field == "comparator") {

            indicatorScanRules[index]["comparator"] = event.target.value || event.target.innerText;




        }


    }




    const handleSwitchChange = name => event => {

        //setExperimental(!experimental);

        setState({ ...state, [name]: event.target.checked });

    }




    const handleAutocompleteInput = (e, type) => {

        setprimaryStock(type);

    }



    const handleSecondaryStock = (e, type) => {

        //alert(type);

    }


    const handleAutocompleteInputFrequency = (e, type) => {

        setFrequency(type);

    }


    const handleSecuritiesInput = (e,type) => {


        setScanSecurities(scanSecurities.concat(type));
    }





    const handleSubmit = () => {   
        let payload = {
            scanSecurities: scanSecurities,
            frequency: frequency,
            scanName: name,
            rules:indicatorScanRules
        }

        //alert(JSON.stringify(payload));

         axios.post("http://localhost:3000/voyant/api/scan", payload, {
        headers: {
          "x-access-token": window.localStorage.getItem("voyant-jwt-token")
        }
      })
      .then(res => {
        const resp = res.status
        if (resp == 200){
         // alert("Success");
        }
        else{
          alert("Something went wrong")
        }


      });

    }


    const removeRule = (index) => {
        const len = indicatorScanRules.length;
        if (len == 1) {
            return;
        }

        setIndicatorScanRules(indicatorScanRules.splice(0, len - 1));

        setArgsToShow(indicatorArgsToShow.splice(len - 1, 1));
    }

    const addRule = () => {

        setIndicatorScanRules(indicatorScanRules.concat({
            id: uuid(),
            security: "",
            firstIndicator: "",
            secondIndicator: "",
            firstIndicatorArgs: {},
            secondIndicatorArgs: {},
            comparator: ""

        }));


        setArgsToShow(argsToShow.concat({
            id: uuid(),
            "ma": false,
            "number": false,
            "percent": false
        }));


        setIndicatorArgsToShow(argsToShow.concat({
            id: uuid(),
            "movingAvg": false,
            "momentumIntArgs": false,
            "stochf": false,
            "stoch": false,
            "sentiment": false,
            "ultosc": false,
            "willr": false,
            "mfi": false,
            "osc": false,
            "ohlcv": false,
            "acc_osc": false,
            "bop": false,
            "adx": false,
            "cci": false,
            "demarker": false,
            "donchian": false,
            "macd": false,
            "parSar": false,
            "supertrend": false,
            "T3": false,
            "aroonUp": false,
            "aroonDown": false,
            "aroonOsc": false,
            "ichimokuA": false,
            "ichimokuB": false,
            "ichimokuBase": false,
            "vortexPos": false,
            "vortexNeg": false,
            "obv": false,
            "fi": false,
            "adsoc": false,
            "ad": false,
            "fi": false,
            "lowerBollinger": false,
            "upperBollinger": false

        }));


    }




    const showArgs = (index, type) => {
        return argsToShow[index][type];
    }


    // RENDER STUFF





    const showPercentField = (obj, index) => {

        return (<Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Percentage"
             margin="normal"
             value={obj.indicator2}
             
             name={`indicator1_${obj.id}`}
             
             
           /> 
             
           </Grid>)



    }


    const showNumberField = (obj, index) => {

        return (<Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             value={obj.indicator2}
             
             name={`indicator1_${obj.id}`}
             
             
           /> 
             
           </Grid>)

    }



    const showMAField = (obj, index) => {

        return (

            <div>

            <Grid item xs={12} container direction="row" spacing={2}>
      



               <Grid item xs={6}>
      
                 <TextField
                   
                   fullWidth
                     required
                     type="number"
                   label="Period"
                   margin="normal"
                   onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1","n")}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj,"indicator1" ,"price")}
      
                    renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Feed"
                  margin="normal"
                  
                />  )}
                />
      
      
      
      
            </Grid>
      
            </Grid>




        <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>





            <Typography> 

              Indicator 2: {indicatorScanRules[index]["secondIndicator"]}

            </Typography>




  <Grid  xs={12} spacing={2} container direction="row">
      
               <Grid item xs={6}>
      
                 <TextField
                   
                   fullWidth
                     required
                     type="number"
                   label="Period"
                   margin="normal"
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n")}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"price")}
      
                    renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Feed"
                  margin="normal"
                  
                />  )}
                />
      
      
      
      
            </Grid>
      
            </Grid>


          </div>


        )

    }




    const showMomentumIntField = (obj, index) => {

        return (

            <div>

            <Grid item xs={12} container direction="row" spacing={2}>
      



               <Grid item xs={6}>
      
                 <TextField
                   
                   fullWidth
                     required
                     type="number"
                   label="Period"
                   margin="normal"
                 onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"price")}
      
                    renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Feed"
                  margin="normal"
                  
                />  )}
                />
      
      
      
      
            </Grid>
      
            </Grid>




        <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>


          <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}
             
           /> 
             
           </Grid>







          </div>


        )

    }





    const showStochfFields = (obj, index) => {

        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
      
      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast D period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_d_n")}
                         
                         
                       /> 
            
                  </Grid>
            
      
      
      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast K period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_k_n")}                         
                         
                       /> 
            
                  </Grid>
            
      
      
      
      
                     <Grid item xs={4}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_d_ma_type")}
      
                    renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Moving Avg. Type"
                  margin="normal"
                  
                />  )}
                />
            
                  </Grid>
            
      
            </Grid>



        <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>






          <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
            onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}             
             
           /> 
             
           </Grid>




      
      
            </div>)

    }




    const showStochFields = (obj, index) => {

        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
      
      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="RSI Period"
                         margin="normal"

                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}
                      
                         
                       /> 
            
                  </Grid>
            
      
      


      
                     <Grid item xs={4}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleArrayChange(e, index, obj,"indicator1", "ma_type")}
      
                    renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Moving Avg. Type"
                  margin="normal"
                  
                />  )}
                />
            
                  </Grid>
            


      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Moving Avg Period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"ma_n")}
                         
                       /> 
            
                  </Grid>
            
      
      
      
      
            </Grid>



        <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>






          <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
            onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}
             
             
           /> 
             
           </Grid>




      
      
            </div>)

    }




    const showSentinmentFields = (obj, index) => {

        return (<Grid item>
                 <Autocomplete
                options={sentimentVal.map(option => option.name)}
                onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}
  
                renderInput={params => (
            <TextField
              {...params}
              fullWidth
                required
                type="text"
              label="Sentiments"
              margin="normal"
              
            />  )}
            />
  
  
        </Grid>)

    }



    const showWillrField = (obj, index) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}           
                         
                       /> 
            
                  </Grid>


              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>



                <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
            onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}             
             
           /> 
             
           </Grid>


           </div>

        )
    }




    const showUltoscFields = (obj, index) => {

        return (

            <div>
             <Grid item xs={12} container direction="row" spacing={2}>


            <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period 1"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"time_period_1")}                         
                         
                       /> 
            
                  </Grid>


                 <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period 2"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"time_period_2")}                          
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period 3"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"time_period_3")} 
                         
                         
                       /> 
            
                  </Grid>


             </Grid>




              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>



                <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)} 
             
             
           /> 
             
           </Grid>

           </div>

        )
    }




    const showMFIFields = (obj, index) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")} 
                         
                         
                       /> 
            
                  </Grid>


              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>



                <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)} 
             
             
           /> 
             
           </Grid>


           </div>

        )
    }




    const showOSCFields = (obj, index) => {

        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
      
      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_period")} 
                         
                         
                       /> 
            
                  </Grid>
            
      
      



      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Slow Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"slow_period")} 
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"ma_type")} 
      
                    renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Moving Avg. Type"
                  margin="normal"
                  
                />  )}
                />
            
                  </Grid>
            
            
      
      
      
      
            </Grid>



        <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>






          <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)} 
             
             
           /> 
             
           </Grid>




      
      
            </div>)
    }





    const showOHLCVFields = (obj, index) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Pevious N"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}
                         
                         
                       /> 
            
                  </Grid>


              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>



                <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}
             
             
           /> 
             
           </Grid>


           </div>

        )
    }


    const showAOfields = (obj, index) => {


        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
    


      
      
                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"ma_type")}
      
                    renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Moving Avg. Type"
                  margin="normal"
                  
                />  )}
                />
            
                  </Grid>
            
            
      
      
      
      
            </Grid>



        <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>






          <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}
             
             
           /> 
             
           </Grid>




      
      
            </div>)

    }


    const showBOPFields = (obj, index) => {

        return (<div>
                  <Grid item xs={12} >
                                <Autocomplete
                     options={comparators.map(option => option.name)}
                     onChange= {e => handleArrayChange(e, index, obj, "comparator")}
       
                     renderInput={params => (
                 <TextField
                   {...params}
                   fullWidth
                     required
                     type="text"
                   label="Comparator"
                   margin="normal"
                   
                 />  )}
                 />
       
                 </Grid>
       
       
       
                       <Grid item xs={12}>
        
        
                  <TextField
                    
                    fullWidth
                      required
                      type="number"
                    label="Enter a decimal number"
                    margin="normal"
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}

                    
                  /> 
                    
                  </Grid>
       
       
                  </div>)

    }




    const showADXFields = (obj, index) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}

                         
                         
                       /> 
            
                  </Grid>


              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>



                <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
           onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}

             
             
           /> 
             
           </Grid>


           </div>

        )
    }



    const showCCIFields = (obj, index) => {


        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
    


      
      
                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}

                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Scaling Factor"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"c")}

                         
                         
                       /> 
            
                  </Grid>


                  
            
      
      
      
      
            </Grid>



        <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>






          <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}

             
             
           /> 
             
           </Grid>




      
      
            </div>)

    }




    const showDemarkerFields = (obj, index) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"period")}

                         
                         
                       /> 
            
                  </Grid>


              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>



                <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}

             
             
           /> 
             
           </Grid>


           </div>

        )
    }



    const showDonchianFields = (obj, index) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}

                         
                         
                       /> 
            
                  </Grid>


              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>



                <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}

             
             
           /> 
             
           </Grid>


           </div>

        )
    }



    const showMacdFields = (obj, index) => {


        return (

            <Grid item xs={12} container direction="row" spacing={2}>
    


      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_period")}

                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Slow Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"slow_period")}

                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Signal Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"signal_period")}

                         
                         
                       /> 
            
                  </Grid>


                  
            
      
      
      
      
            </Grid>
        )

    }





    const showParSarFields = (obj, index) => {


        return (

            <div>
      
            <Grid item xs={12} container direction="row" spacing={2}>
    


      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="initial AF"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"initial_af")}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Step AF"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"step_af")}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="End AF"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"end_af")}
                         
                         
                       /> 
            
                  </Grid>


                  
            
      
      
      
      
            </Grid>


              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>


          <Typography>
            Price of an Asset
          </Typography>



            </div>
        )

    }



    const showSTFields = (obj, index) => {


        return (

            <div>
      
            <Grid item xs={12} container direction="row" spacing={2}>
    


      
      
                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"period")}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Multiplier"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"multiplier")}
                         
                         
                       /> 
            
                  </Grid>



                     


                  
            
      
      
      
      
            </Grid>


              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>


          <Typography>
            Price of an Asset
          </Typography>



            </div>
        )

    }



    const showT3Fields = (obj, index) => {


        return (

            <div>
      
            <Grid item xs={12} container direction="row" spacing={2}>

                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"

                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="V Factor"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"v_factor")}
                         
                         
                       /> 
            
                  </Grid>

            </Grid>


              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>


             <Grid item xs={12} container direction="row" spacing={2}>

                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n")}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="V Factor"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"v_factor")}
                         
                         
                       /> 
            
                  </Grid>

            </Grid>



       



            </div>
        )

    }





    const showAroonFields = (obj, index, upOrDown) => {

        return (
            <div> 


                     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1Aroon" ,"n")}
                         
                         
                         
                       /> 
            
                  </Grid>


                       <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>


          <Typography>
            {upOrDown}
          </Typography>



                </div>

        )
    }



    const showAroonOscFields = (obj, index) => {

        return (
            <div> 


                     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}
                         
                         
                       /> 
            
                  </Grid>


                              <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>



                <Grid item xs={12}>
 
 
           <TextField
             
             fullWidth
               required
               type="number"
             label="Enter a decimal number"
             margin="normal"
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}

             
             
           /> 
             
           </Grid>



                </div>

        )
    }



    const showIchimokuAFields = (obj, index) => {

        return (
            <div> 

 <Grid item xs={12} container direction="row" spacing={2}>

                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n1")}
                         
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Medium Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n2")}
                         
                         
                         
                       /> 
            
                  </Grid>

            </Grid>



                       <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>

        <Grid item xs={12} >
                         <Autocomplete
              options={ichimokuAArgs.map(option => option.name)}
              onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null)}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Args"
            margin="normal"
            
          />  )}
          />

          </Grid>





                </div>

        )
    }


    const showIchimokuBFields = (obj, index) => {

        return (
            <div> 

 <Grid item xs={12} container direction="row" spacing={2}>

                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast Period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n2")}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Medium Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n3")}
                         
                         
                       /> 
            
                  </Grid>

            </Grid>



                       <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>

        <Grid item xs={12} >
                         <Autocomplete
              options={ichimokuBArgs.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "ichimokuArgs")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>






                </div>

        )
    }




    const showIchimokuBaseFields = (obj, index) => {

        return (
            <div> 

                     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Medium Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n2")}
                         
                         
                       /> 
            
                  </Grid>

                       <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>

        <Grid item xs={12} >
                         <Autocomplete
              options={ichimokuBaseArgs.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "ichimokuArgs")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>






                </div>

        )
    }


    const showVortexPosFields = (obj, index) => {

        return (
            <div>
     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}
                         
                         
                       /> 
            
    </Grid>


    <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>

        <Typography>
            Vortex Negative
        </Typography>


    <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n")}
                         
                         
                       /> 
            
    </Grid>



</div>)



    }



    const showVortexNegFields = (obj, index) => {

        return (
            <div>
     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}
                         
                         
                       /> 
            
    </Grid>


    <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>

        <Typography>
            Vortex Positive
        </Typography>


    <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n")}
                         
                         
                       /> 
            
    </Grid>



</div>)

    }



    const showOBVFields = (obj, index) => {


        return (

            <div>
                <Typography>
                    Daily OBV
                </Typography>


    <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>

          <Grid>
               <Grid item xs={6}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"ma_type")}
      
                    renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Moving Avg. Type"
                  margin="normal"
                  
                />  )}
                />
            
                  </Grid>



    <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n")}
                         
                         
                       /> 
            
    </Grid>
            
      
      </Grid>


            </div>

        )
    }




    const showADFields = (obj, index) => {


        return (

            <div>
                <Typography>
                    Daily OBV
                </Typography>


    <Grid item xs={12} >
                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>

 <Grid xs={12} container direction="row" spacing={2}>
               <Grid item xs={6}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"ma_type")}
      
                    renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Moving Avg. Type"
                  margin="normal"
                  
                />  )}
                />
            
                  </Grid>



    <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n")}
                         
                         
                       /> 
            
    </Grid>
            
      
      </Grid>


            </div>

        )
    }



    const showFIFields = (obj, index) => {


        return (

            <div>
              


    <Grid item xs={12} >


    <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}
                         
                         
                       /> 
            
    </Grid>



                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>

    <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Enter a Number"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"n")}                         
                         
                       /> 
            
    </Grid>

            </div>

        )
    }


    const showADSOCFields = (obj, index) => {


        return (

            <div>
              


 <Grid item xs={12} container direction="row" spacing={2}>


    <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_period")}
                         
                         
                       /> 
            
    </Grid>

     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Slow Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"slow_period")}
                         
                         
                       /> 
            
    </Grid>


    </Grid>


<Grid>


                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>

    <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Enter a Number"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"n")}
                         
                         
                       /> 
            
    </Grid>

            </div>

        )
    }





    const showBollingerFields = (obj, index, type) => {


        return (

            <div>

        { (type=='upper')? <Typography> Upper Bollinger Band </Typography> : <Typography> Lower Bollinger Band </Typography> }
        <Grid item xs={12}>
                  
                             <TextField
                               
                               fullWidth
                                 required
                                 type="number"
                               label="Period"
                               margin="normal"
                               onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n")}
                               
                               
                             /> 
                  
          </Grid>
      


      
          <Grid item xs={12}>
                  
                             <TextField
                               
                               fullWidth
                                 required
                                 type="number"
                               label="Deviation"
                               margin="normal"
                               onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n_bdev")}
                               
                               
                             /> 
                  
          </Grid>
      
      
      <Grid container direction = "row" xs={12} spacing={2}>
        <Grid item xs={6}>
                  
                              <Autocomplete
                          options={maTypes.map(option => option.name)}
                          onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"ma_type")}
            
                          renderInput={params => (
                      <TextField
                        {...params}
                        fullWidth
                          required
                          type="text"
                        label="Moving Avg. Type"
                        margin="normal"
                        
                      />  )}
                      />
                  
                        </Grid>
      
      
      
      
                   <Grid item xs={6}>
            
                      <Autocomplete
                          options={feed.map(option => option.name)}
                          onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"price")}
                          renderInput={params => (
                      <TextField
                        {...params}
                        fullWidth
                          required
                          type="text"
                        label="Feed"
                        margin="normal"
                        
                      />  )}
                      />
            
            
            
            
                  </Grid>
      
      
          </Grid>



<Grid item xs={12}>


                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator")}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Comparator"
            margin="normal"
            
          />  )}
          />

          </Grid>


             <Grid item xs={12}>
            
                      <Autocomplete
                          options={feed.map(option => option.name)}
                          onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"Price")}
            
                          renderInput={params => (
                      <TextField
                        {...params}
                        fullWidth
                          required
                          type="text"
                        label="Feed"
                        margin="normal"
                        
                      />  )}
                      />
            
            
            
            
                  </Grid>

    </div>

        )

    }









    /*
                    RENDER FORM 

    */

    const renderScanParams = (arr) => {


        return arr.map((obj, index) => {

            return (

                <div>

                <br />
                <br />

                <Box variant="outlined" border={1}>

      



  <Grid item xs={12}>


            <Autocomplete
              options={indicators.map(option => option.name)}
               
              onChange={e => handleArrayChange(e, index, obj, "indicator1")}
              

              renderInput={params => (

          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Indicator"
            value={obj.indicator1}
            name={`indicator1_${obj.id}`}
            
            
          />  )}
          />

            
          </Grid>


{indicatorArgsToShow[index]["movingAvg"]? showMAField(obj,index) : null }
{indicatorArgsToShow[index]["momentumIntArgs"]? showMomentumIntField(obj,index) : null }
{indicatorArgsToShow[index]["stochf"]? showStochfFields(obj,index) : null }
{indicatorArgsToShow[index]["stoch"]? showStochFields(obj,index) : null }
{indicatorArgsToShow[index]["sentiment"]? showSentinmentFields(obj,index) : null }
{indicatorArgsToShow[index]["willr"]? showWillrField(obj,index) : null }
{indicatorArgsToShow[index]["ultosc"]? showUltoscFields(obj,index) : null }
{indicatorArgsToShow[index]["mfi"]? showMFIFields(obj,index) : null }
{indicatorArgsToShow[index]["osc"]? showOSCFields(obj,index) : null }
{indicatorArgsToShow[index]["ohlcv"]? showOHLCVFields(obj,index) : null }
{indicatorArgsToShow[index]["ao"]? showAOfields(obj,index) : null }
{indicatorArgsToShow[index]["bop"]? showBOPFields(obj,index) : null }
{indicatorArgsToShow[index]["adx"]? showADXFields(obj,index) : null }
{indicatorArgsToShow[index]["cci"]? showCCIFields(obj,index) : null }
{indicatorArgsToShow[index]["demarker"]? showDemarkerFields(obj,index) : null }
{indicatorArgsToShow[index]["donchian"]? showDonchianFields(obj,index) : null }
{indicatorArgsToShow[index]["macd"]? showMacdFields(obj,index) : null }
{indicatorArgsToShow[index]["parSar"]? showParSarFields(obj,index) : null }
{indicatorArgsToShow[index]["supertrend"]? showSTFields(obj,index) : null }
{indicatorArgsToShow[index]["T3"]? showT3Fields(obj,index) : null }
{indicatorArgsToShow[index]["aroonUp"]? showAroonFields(obj,index, "Aroon Down") : null }
{indicatorArgsToShow[index]["aroonDown"]? showAroonFields(obj,index, "Aroon Up") : null }
{indicatorArgsToShow[index]["aroonOsc"]? showAroonOscFields(obj,index) : null }
{indicatorArgsToShow[index]["ichimokuA"]? showIchimokuAFields(obj,index) : null }
{indicatorArgsToShow[index]["ichimokuB"]? showIchimokuBFields(obj,index) : null }
{indicatorArgsToShow[index]["ichimokuBase"]? showIchimokuBaseFields(obj,index) : null }
{indicatorArgsToShow[index]["vortexPos"]? showVortexPosFields(obj,index) : null }
{indicatorArgsToShow[index]["vortexNeg"]? showVortexNegFields(obj,index) : null }
{indicatorArgsToShow[index]["obv"]? showOBVFields(obj,index) : null }
{indicatorArgsToShow[index]["ad"]? showADFields(obj,index) : null }
{indicatorArgsToShow[index]["fi"]? showFIFields(obj,index) : null }
{indicatorArgsToShow[index]["adsoc"]? showADSOCFields(obj,index) : null }
{indicatorArgsToShow[index]["upperBollinger"]? showBollingerFields(obj,index,"upper") : null }
{indicatorArgsToShow[index]["lowerBollinger"]? showBollingerFields(obj,index,"lower") : null }


 {  argsToShow[index]["number"]? showNumberField(obj,index) : null }
 {  argsToShow[index]["percent"]? showPercentField(obj,index) : null }
 {  argsToShow[index]["ma"]? showMAField(obj,index) : null }


      </Box>

      </div>




            );




        })

    }





const renderTraditionalForm = () => {
    return (


           <form  style= {{  width: "inherit" }} onSubmit={handleSubmit} noValidate>







           <Grid fullWidth item xs={12} xm={6} >
                         <Autocomplete multiple
              options={securities.map(option => option.name)}
              onChange= {handleSecuritiesInput}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Security"
            margin="normal"
            
          />  )}
          />

          </Grid>




          <Grid item xs={12}>
  
   <TextField
              fullWidth
              required
              type="text"
              label="Name"
              onInput= {e => setName(e.target.value)}
                        />

          </Grid>




<Grid item xs={12}>
         <Autocomplete
              options={frequencies.map(option => option.name)}
              onChange= { handleAutocompleteInputFrequency}

              renderInput={params => (
          <TextField
            {...params}
            fullWidth
              required
              type="text"
            label="Frequency"
            margin="normal"
            
          />  )}
          />


</Grid>

     


  {renderScanParams(indicatorScanRules)}

   <Grid item xs={6} style={{ marginTop: 12 }}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    onClick={addRule}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>



   <Grid itemxs={6} style={{ marginTop: 12 }}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    onClick={removeRule}
                  >
                    <DeleteIcon />
                  </Fab>
                </Grid>


 
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>



           </form>
       


        )
}




    return (
        <div fullWidth >
      <Grid  fullWidth container spacing={2} direction= "row" justify="flex-start" alignItems="flex-start">

           <Grid>

    <br />

        <Switch
            checked={state.checkedB}
            onChange={handleSwitchChange('checkedB')}
            value="checkedB"
            color="primary"
            label="Switch to clairvoyance mode"
          />  {state.checkedB? <Typography> <b> Switch to normal mode </b> </Typography> : <Typography> <b> Switch to clairvoyance mode </b> </Typography>}

    </Grid>

        {state.checkedB? <ExperimentalScan /> : renderTraditionalForm()}






      </Grid>
    </div>
    )




}

export default ScanForm;