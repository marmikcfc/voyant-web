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
    Switch
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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

import ExperimentalForm from './ExperimentalForm'



const uuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};







const CreateStrategy = () => {


    const [entryLongIndicatorArgsToShow, setEntryLongIndicatorArgsToShow] = useState([{
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


    const [exitLongIndicatorArgsToShow, setExitLongIndicatorArgsToShow] = useState([{
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


const [exitShortIndicatorArgsToShow, setExitShortIndicatorArgsToShow] = useState([{
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


const [entryShortIndicatorArgsToShow, setEntryShortIndicatorArgsToShow] = useState([{
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

    }]);




    const [entryLongRules, setEntryLongRules] = useState([{
        id: uuid(),
        security: "",
        indicator1: "",
        indicator2: "",
        indicator1Args: {},
        indicator2Args: {},
        comparator: ""
    }]);


   
    const [entryShortRules, setEntryShortRules] = useState([{
        id: uuid(),
        security: "",
        indicator1: "",
        indicator2: "",
        indicator1Args: {},
        indicator2Args: {},
        comparator: ""
    }]);

    const [exitLongRules, setExitLongRules] = useState([{
        
        id: uuid(),
        security: "",
        indicator1: "",
        indicator2: "",
        indicator1Args: {},
        indicator2Args: {},
        comparator: ""
    }]);

    const [exitShortRules, setExitShortRules] = useState([{
         id: uuid(),
        security: "",
        indicator1: "",
        indicator2: "",
        indicator1Args: {},
        indicator2Args: {},
        comparator: ""
    }]);

    const [name, setName] = useState("");

    const [experimental, setExperimental] = useState(false);

    const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });



    const indicators = [
        { func: "ema", name: "Exponential Moving Average(EMA)" },
        { func: "sma", name: "Simple Moving Average(SMA)" },
        { func: "wma", name: "weighted Moving Average(WMA)" },
        { func: "kama", name: "Kauffman Moving Average(KAMA)" },
        { func: "dema", name: "dual exponential Moving Average(DEMA)" },
        { func: "tema", name: "triple exponential Moving Average(TEMA)" },
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
        { name: "Open" },
        { name: "High" },
        { name: "Low" },
        { name: "Close" },
        { name: "Volume" },
        { name: "OBV" },
        { name: "AD" }
    ];

    const sentimentVal = [
        { num: 5, name: "Highly Positive" },
        { num: 4, name: "Positive" },
        { num: 3, name: "Neutral" },
        { num: 2, name: "Negative" },
        { num: 1, name: "Highly Negative" },
    ];

    const maTypes = [
        { func: "ema", name: "Exponential Moving Average(EMA)" },
        { func: "sma", name: "Simple Moving Average(SMA)" },
        { func: "wma", name: "weighted Moving Average(WMA)" },
        { func: "kama", name: "Kauffman Moving Average(KAMA)" },
        { func: "dema", name: "dual exponential Moving Average(DEMA)" },
        { func: "tema", name: "triple exponential Moving Average(TEMA)" }
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


    useEffect(() => {
        //  $(".indicator1Args").hide();

    });


    const addRule = type => {
        switch (type) {
            case "ENTRY_LONG":
                setEntryLongRules(
                    entryLongRules.concat({
                        id: uuid(),
                        security: "",
                        indicator1: "",
                        indicator2: "",
                        indicator1Args: {},
                        indicator2Args: {},
                        comparator: ""
                    })
                );

                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.concat({
                        
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

    
                    }))
                break;
            case "ENTRY_SHORT":
                setEntryShortRules(
                    entryShortRules.concat({
                        id: uuid(),
                        security: "",
                        indicator1: "",
                        indicator2: "",
                        indicator1Args: {},
                        indicator2Args: {},
                        comparator: ""
                    })
                );

                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.concat({
                        
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

    
                    }))
                break;
            case "EXIT_LONG":
                setExitLongRules(
                    exitLongRules.concat({
                        id: uuid(),
                        security: "",
                        indicator1: "",
                        indicator2: "",
                        indicator1Args: {},
                        indicator2Args: {},
                        comparator: ""
                    })
                );

                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.concat({
                        
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

    
                    }))
                break;
            case "EXIT_SHORT":
                setExitShortRules(
                    exitShortRules.concat({
                        id: uuid(),
                        security: "",
                        indicator1: "",
                        indicator2: "",
                        indicator1Args: {},
                        indicator2Args: {},
                        comparator: ""
                    })
                );

                setExitShortIndicatorArgsToShow(
                    exitShortIndicatorArgsToShow.concat({
                        
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

    
                    }))
                break;
        }
    };



    const removeRule = (id, type) => {
        switch (type) {
            case "ENTRY_LONG":
                setEntryLongRules(entryLongRules.filter(rule => rule.id != id));
                break;
            case "ENTRY_SHORT":
                setEntryShortRules(entryShortRules.filter(rule => rule.id != id));
                break;
            case "EXIT_LONG":
                setExitLongRules(exitLongRules.filter(rule => rule.id != id));
                break;
            case "EXIT_SHORT":
                setExitShortRules(exitShortRules.filter(rule => rule.id != id));
                break;
        }
    };




    const handleIndicatorArgChange = (event, index, obj, ind, field,type) => {

        if (type =="ENTRY_LONG")
        {
            if (ind == "indicator1") {
        
                    entryLongRules[index]["indicator1Args"][field] = event.target.value || event.target.innerText;
        
        
        
        
                } else if (ind == "indicator2") {
        
                    entryLongRules[index]["indicator2Args"][field] = event.target.value || event.target.innerText;
        
        
                } else if (ind == "indicator2Val") {
        
                    entryLongRules[index]["indicator2"] = event.target.value || event.target.innerText;
                } else if (ind == "indicator1Aroon") {
        
        
                    entryLongRules[index]["indicator1Args"][field] = event.target.value || event.target.innerText;
                    entryLongRules[index]["indicator2Args"][field] = event.target.value || event.target.innerText;
                }
            }

        if (type =="EXIT_SHORT")
        {
            if (ind == "indicator1") {
        
                    exitShortRules[index]["indicator1Args"][field] = event.target.value || event.target.innerText;
        
        
        
        
                } else if (ind == "indicator2") {
        
                    exitShortRules[index]["indicator2Args"][field] = event.target.value || event.target.innerText;
        
        
                } else if (ind == "indicator2Val") {
        
                    exitShortRules[index]["indicator2"] = event.target.value || event.target.innerText;
                } else if (ind == "indicator1Aroon") {
        
        
                    exitShortRules[index]["indicator1Args"][field] = event.target.value || event.target.innerText;
                    exitShortRules[index]["indicator2Args"][field] = event.target.value || event.target.innerText;
                }
            }


        if (type =="ENTRY_SHORT")
        {
            if (ind == "indicator1") {
        
                    entryShortRules[index]["indicator1Args"][field] = event.target.value || event.target.innerText;
        
        
        
        
                } else if (ind == "indicator2") {
        
                    entryShortRules[index]["indicator2Args"][field] = event.target.value || event.target.innerText;
        
        
                } else if (ind == "indicator2Val") {
        
                    entryShortRules[index]["indicator2"] = event.target.value || event.target.innerText;
                } else if (ind == "indicator1Aroon") {
        
        
                    entryShortRules[index]["indicator1Args"][field] = event.target.value || event.target.innerText;
                    entryShortRules[index]["indicator2Args"][field] = event.target.value || event.target.innerText;
                }
            }

        if (type =="EXIT_LONG")
        {
            if (ind == "indicator1") {
        
                    exitLongRules[index]["indicator1Args"][field] = event.target.value || event.target.innerText;
        
        
        
        
                } else if (ind == "indicator2") {
        
                    exitLongRules[index]["indicator2Args"][field] = event.target.value || event.target.innerText;
        
        
                } else if (ind == "indicator2Val") {
        
                    exitLongRules[index]["indicator2"] = event.target.value || event.target.innerText;
                } else if (ind == "indicator1Aroon") {
        
        
                    exitLongRules[index]["indicator1Args"][field] = event.target.value || event.target.innerText;
                    exitLongRules[index]["indicator2Args"][field] = event.target.value || event.target.innerText;
                }
            }
    }




    const handleArrayChange = (event, index , id, type, field) => {
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


        let rule = null;
        switch (type) {
            case "ENTRY_LONG":
                rule = entryLongRules.filter(rule => rule.id === id);
                break;
            case "ENTRY_SHORT":
                rule = entryShortRules.filter(rule => rule.id === id);
                break;
            case "EXIT_LONG":
                rule = exitLongRules.filter(rule => rule.id === id);
                break;
            case "EXIT_SHORT":
                rule = exitShortRules.filter(rule => rule.id === id);
                break;
        }
            



        if (field == "indicator1" ) { 

            if (type === "ENTRY_LONG")
            {
                let indicatorName = event.target.value || event.target.innerText;
            
            
                        var ind = indicators.find(indicator => indicator.name === indicatorName);
            
            
                        let indicatorFunc = ind.func;
                        //alert(JSON.stringify(entryLongRules));
            
            
            
                if (movingAvgIndicators.indexOf(indicatorFunc) != -1) {
            
            
                             setEntryLongRules(
                                 entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat({
            
                                     "indicator1": indicatorFunc,
                                     "indicator2": indicatorFunc,
                                     "indicator1Args": { "n": -1, "price": "" },
                                     "indicator2Args": { "n": -1, "price": "" }
            
                                 }));
            
            
            
                             setEntryLongIndicatorArgsToShow(
                                 entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({
            
                                     "movingAvg": true
                                 })));
            
            
            
                         }

                else if (indicatorFunc == sent) {

                        setEntryLongRules(
                             entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({
                            "indicator1": indicatorFunc,
                            "indicator2": "",
                         })));

                        setEntryLongIndicatorArgsToShow(
                            entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({
                             "sentiment": true
                        })));


                         }

                else if (momentumIntegerIndicators.indexOf(indicatorFunc) != -1) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "price": "" },

                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "momentumIntArgs": true
                    })));

            }


            else if (indicatorFunc == stochfIndicator) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_k_n": -1, "fast_d_n": -1, "fast_d_ma_type": "sma" },

                    })));




                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stochf": true
                    })));
            } else if (indicatorFunc == stochRSI) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "ma_type": "sma", "ma_n": -1 },

                    })));



                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stoch": true
                    })));

            }

            else if (indicatorFunc == ultosc) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));




                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ultosc": true
                    })));

            } else if (indicatorFunc == willr) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));



                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "willr": true
                    })));

            } else if (indicatorFunc == mfi) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "mfi": true
                    })));


            } else if (oscIndicators.indexOf(indicatorFunc) != -1) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period": -1, "ma_type": "sma" },

                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "osc": true
                    })));


            } else if (indicatorFunc == ohlcvIndicators) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));

                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ohlcv": true
                    })));

            } else if (indicatorFunc == ao) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "ma_type": "sma" },

                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ao": true
                    })));


            } else if (indicatorFunc == adx) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));

                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adx": true
                    })));


            } else if (indicatorFunc == bop) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": ""

                    })));

                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "bop": true
                    })));
            } else if (indicatorFunc == cci) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "c": 0.15 }
                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "cci": true
                    })));
            } else if (indicatorFunc == demarker) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "period": -1 }
                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "demarker": true
                    })));
            } else if (indicatorFunc == donchian) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 }
                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "donchian": true
                    })));
            } else if (indicatorFunc == macd) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period": -1, "signal_period": -1 }
                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "macd": true
                    })));
            } else if (indicatorFunc == parSar) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "initial_af": 0.02, "step_af": 0.02, "end_af": 0.2 }
                    })));



                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "parSar": true
                    })));
            } else if (indicatorFunc == supertrend) {



                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "period": 7, "multiplier": 3 }
                    })));



                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "supertrend": true
                    })));
            } else if (indicatorFunc == t3) {



                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": indicatorFunc,
                        "indicator1Args": { "n": -1, "v_factor": 0.7 },
                        "indicator2Args": { "n": -1, "v_factor": 0.7 }
                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "T3": true
                    })));
            } else if (indicatorFunc == aroonUp) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "aroon_down",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));



                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonUp": true
                    })));

            } else if (indicatorFunc == aroonDown) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "aroon_up",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonDown": true
                    })));
            } else if (indicatorFunc == aroonOsc) {



                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },
                    })));



                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonOsc": true
                    })));
            } else if (indicatorFunc == ichimokuA) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n1": -1, "n2": -1 }
                    })));




                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuA": true
                    })));

            } else if (indicatorFunc == ichimokuB) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n3": -1, "n2": -1 }
                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuB": true
                    })));

            } else if (indicatorFunc == ichimokuBase) {


                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": {"n2": -1 }
                    })));



                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuBase": true
                    })));

            } else if (indicatorFunc == vortexPos) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "vortex_neg",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexPos": true
                    })));

            } else if (indicatorFunc == vortexNeg) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "vortex_pos",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexNeg": true
                    })));
            } else if (indicatorFunc == obv) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator2Args": { "n": -1, "price":"obv" }
                    })));

                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "obv": true
                    })));


            } else if (indicatorFunc == ad) {

                  setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator2Args": { "n": -1, "price":"ad" }
                    })));



                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ad": true
                    })));

            } else if (indicatorFunc == fi) {

                 setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 }
                    })));



                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "fi": true
                    })));
            } else if (indicatorFunc == adsoc) {


                 setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period":-1 }
                    })));


                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adsoc": true
                    })));

            } else if (indicatorFunc == bbBandsUp) {

                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));



                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "upperBollinger": true
                    })));
            } else if (indicatorFunc == bbBandsLow) {



                setEntryLongRules(
                    entryLongRules.filter(arg => entryLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));

                
                setEntryLongIndicatorArgsToShow(
                    entryLongIndicatorArgsToShow.filter(arg => entryLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "lowerBollinger": true
                    })));
            }


        }

           else if (type === "ENTRY_SHORT")
            {
                let indicatorName = event.target.value || event.target.innerText;
            
            
                        var ind = indicators.find(indicator => indicator.name === indicatorName);
            
            
                        let indicatorFunc = ind.func;
                        //alert(JSON.stringify(entryLongRules));
            
            
            
                         if (movingAvgIndicators.indexOf(indicatorFunc) != -1) {
            
            
                             setEntryShortRules(
                                 entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat({
            
                                     "indicator1": indicatorFunc,
                                     "indicator2": indicatorFunc,
                                     "indicator1Args": { "n": -1, "price": "" },
                                     "indicator2Args": { "n": -1, "price": "" }
            
                                 }));
            
            
            
                             setEntryShortIndicatorArgsToShow(
                                 entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({
            
                                     "movingAvg": true
                                 })));
            
            
            
                         }

                else if (indicatorFunc == sent) {

                        setEntryShortRules(
                             entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({
                            "indicator1": indicatorFunc,
                            "indicator2": "",
                         })));

                        setEntryShortIndicatorArgsToShow(
                            entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({
                             "sentiment": true
                        })));


                         }

                else if (momentumIntegerIndicators.indexOf(indicatorFunc) != -1) {


                    setEntryShortRules(
                         entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({
                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "price": "" },

                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "momentumIntArgs": true
                    })));

            }

            else if (indicatorFunc == stochfIndicator) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_k_n": -1, "fast_d_n": -1, "fast_d_ma_type": "sma" },

                    })));




                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stochf": true
                    })));
            } else if (indicatorFunc == stochRSI) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "ma_type": "sma", "ma_n": -1 },

                    })));



                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stoch": true
                    })));

            }

            else if (indicatorFunc == ultosc) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));




                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ultosc": true
                    })));

            } else if (indicatorFunc == willr) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));



                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "willr": true
                    })));

            } else if (indicatorFunc == mfi) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "mfi": true
                    })));


            } else if (oscIndicators.indexOf(indicatorFunc) != -1) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period": -1, "ma_type": "sma" },

                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "osc": true
                    })));


            } else if (indicatorFunc == ohlcvIndicators) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));

                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ohlcv": true
                    })));

            } else if (indicatorFunc == ao) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "ma_type": "sma" },

                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ao": true
                    })));


            } else if (indicatorFunc == adx) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));

                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adx": true
                    })));


            } else if (indicatorFunc == bop) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": ""

                    })));

                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "bop": true
                    })));
            } else if (indicatorFunc == cci) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "c": 0.15 }
                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "cci": true
                    })));
            } else if (indicatorFunc == demarker) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "period": -1 }
                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "demarker": true
                    })));
            } else if (indicatorFunc == donchian) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 }
                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "donchian": true
                    })));
            } else if (indicatorFunc == macd) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period": -1, "signal_period": -1 }
                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "macd": true
                    })));
            } else if (indicatorFunc == parSar) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "initial_af": 0.02, "step_af": 0.02, "end_af": 0.2 }
                    })));



                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "parSar": true
                    })));
            } else if (indicatorFunc == supertrend) {



                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "period": 7, "multiplier": 3 }
                    })));



                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "supertrend": true
                    })));
            } else if (indicatorFunc == t3) {



                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": indicatorFunc,
                        "indicator1Args": { "n": -1, "v_factor": 0.7 },
                        "indicator2Args": { "n": -1, "v_factor": 0.7 }
                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "T3": true
                    })));
            } else if (indicatorFunc == aroonUp) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "aroon_down",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));



                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonUp": true
                    })));

            } else if (indicatorFunc == aroonDown) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "aroon_up",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonDown": true
                    })));
            } else if (indicatorFunc == aroonOsc) {



                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },
                    })));



                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonOsc": true
                    })));
            } else if (indicatorFunc == ichimokuA) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n1": -1, "n2": -1 }
                    })));




                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuA": true
                    })));

            } else if (indicatorFunc == ichimokuB) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n3": -1, "n2": -1 }
                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuB": true
                    })));

            } else if (indicatorFunc == ichimokuBase) {


                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": {"n2": -1 }
                    })));



                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuBase": true
                    })));

            } else if (indicatorFunc == vortexPos) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "vortex_neg",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexPos": true
                    })));

            } else if (indicatorFunc == vortexNeg) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "vortex_pos",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexNeg": true
                    })));
            } else if (indicatorFunc == obv) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator2Args": { "n": -1, "price":"obv" }
                    })));

                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "obv": true
                    })));


            } else if (indicatorFunc == ad) {

                  setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator2Args": { "n": -1, "price":"ad" }
                    })));



                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ad": true
                    })));

            } else if (indicatorFunc == fi) {

                 setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 }
                    })));



                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "fi": true
                    })));
            } else if (indicatorFunc == adsoc) {


                 setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period":-1 }
                    })));


                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adsoc": true
                    })));

            } else if (indicatorFunc == bbBandsUp) {

                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));



                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "upperBollinger": true
                    })));
            } else if (indicatorFunc == bbBandsLow) {



                setEntryShortRules(
                    entryShortRules.filter(arg => entryShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));

                
                setEntryShortIndicatorArgsToShow(
                    entryShortIndicatorArgsToShow.filter(arg => entryShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "lowerBollinger": true
                    })));
            }


            }

            else if (type === "EXIT_LONG")
            {
                let indicatorName = event.target.value || event.target.innerText;
            
            
                        var ind = indicators.find(indicator => indicator.name === indicatorName);
            
            
                        let indicatorFunc = ind.func;
                        //alert(JSON.stringify(entryLongRules));
            
            
            
                         if (movingAvgIndicators.indexOf(indicatorFunc) != -1) {
            
            
                             setExitLongRules(
                                 exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat({
            
                                     "indicator1": indicatorFunc,
                                     "indicator2": indicatorFunc,
                                     "indicator1Args": { "n": -1, "price": "" },
                                     "indicator2Args": { "n": -1, "price": "" }
            
                                 }));
            
            
            
                             setExitLongIndicatorArgsToShow(
                                 exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({
            
                                     "movingAvg": true
                                 })));
            
            
            
                         }

                else if (indicatorFunc == sent) {

                        setExitLongRules(
                             exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({
                            "indicator1": indicatorFunc,
                            "indicator2": "",
                         })));

                        setExitLongIndicatorArgsToShow(
                            exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({
                             "sentiment": true
                        })));


                }

             else if (momentumIntegerIndicators.indexOf(indicatorFunc) != -1) {


                    setExitLongRules(
                         exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({
                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "price": "" },

                    })));


                    setExitLongIndicatorArgsToShow(
                         exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "momentumIntArgs": true
                    })));

                }

            else if (indicatorFunc == stochfIndicator) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_k_n": -1, "fast_d_n": -1, "fast_d_ma_type": "sma" },

                    })));




                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stochf": true
                    })));
            } else if (indicatorFunc == stochRSI) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "ma_type": "sma", "ma_n": -1 },

                    })));



                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stoch": true
                    })));

            }


            else if (indicatorFunc == ultosc) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));




                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ultosc": true
                    })));

            } else if (indicatorFunc == willr) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));



                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "willr": true
                    })));

            } else if (indicatorFunc == mfi) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "mfi": true
                    })));


            } else if (oscIndicators.indexOf(indicatorFunc) != -1) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period": -1, "ma_type": "sma" },

                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "osc": true
                    })));


            } else if (indicatorFunc == ohlcvIndicators) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));

                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ohlcv": true
                    })));

            } else if (indicatorFunc == ao) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "ma_type": "sma" },

                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ao": true
                    })));


            } else if (indicatorFunc == adx) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));

                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adx": true
                    })));


            } else if (indicatorFunc == bop) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": ""

                    })));

                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "bop": true
                    })));
            } else if (indicatorFunc == cci) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "c": 0.15 }
                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "cci": true
                    })));
            } else if (indicatorFunc == demarker) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "period": -1 }
                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "demarker": true
                    })));
            } else if (indicatorFunc == donchian) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 }
                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "donchian": true
                    })));
            } else if (indicatorFunc == macd) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period": -1, "signal_period": -1 }
                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "macd": true
                    })));
            } else if (indicatorFunc == parSar) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "initial_af": 0.02, "step_af": 0.02, "end_af": 0.2 }
                    })));



                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "parSar": true
                    })));
            } else if (indicatorFunc == supertrend) {



                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "period": 7, "multiplier": 3 }
                    })));



                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "supertrend": true
                    })));
            } else if (indicatorFunc == t3) {



                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": indicatorFunc,
                        "indicator1Args": { "n": -1, "v_factor": 0.7 },
                        "indicator2Args": { "n": -1, "v_factor": 0.7 }
                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "T3": true
                    })));
            } else if (indicatorFunc == aroonUp) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "aroon_down",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));



                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonUp": true
                    })));

            } else if (indicatorFunc == aroonDown) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "aroon_up",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonDown": true
                    })));
            } else if (indicatorFunc == aroonOsc) {



                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },
                    })));



                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonOsc": true
                    })));
            } else if (indicatorFunc == ichimokuA) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n1": -1, "n2": -1 }
                    })));




                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuA": true
                    })));

            } else if (indicatorFunc == ichimokuB) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n3": -1, "n2": -1 }
                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuB": true
                    })));

            } else if (indicatorFunc == ichimokuBase) {


                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": {"n2": -1 }
                    })));



                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuBase": true
                    })));

            } else if (indicatorFunc == vortexPos) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "vortex_neg",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexPos": true
                    })));

            } else if (indicatorFunc == vortexNeg) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "vortex_pos",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexNeg": true
                    })));
            } else if (indicatorFunc == obv) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator2Args": { "n": -1, "price":"obv" }
                    })));

                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "obv": true
                    })));


            } else if (indicatorFunc == ad) {

                  setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator2Args": { "n": -1, "price":"ad" }
                    })));



                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ad": true
                    })));

            } else if (indicatorFunc == fi) {

                 setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 }
                    })));



                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "fi": true
                    })));
            } else if (indicatorFunc == adsoc) {


                 setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period":-1 }
                    })));


                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adsoc": true
                    })));

            } else if (indicatorFunc == bbBandsUp) {

                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));



                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "upperBollinger": true
                    })));
            } else if (indicatorFunc == bbBandsLow) {



                setExitLongRules(
                    exitLongRules.filter(arg => exitLongRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));

                
                setExitLongIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "lowerBollinger": true
                    })));
            } 


            }


             else if (type === "EXIT_SHORT")
            {
                let indicatorName = event.target.value || event.target.innerText;
            
            
                        var ind = indicators.find(indicator => indicator.name === indicatorName);
            
            
                        let indicatorFunc = ind.func;
                        //alert(JSON.stringify(entryLongRules));
            
            
            
                         if (movingAvgIndicators.indexOf(indicatorFunc) != -1) {
            
            
                             setExitShortRules(
                                 exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat({
            
                                     "indicator1": indicatorFunc,
                                     "indicator2": indicatorFunc,
                                     "indicator1Args": { "n": -1, "price": "" },
                                     "indicator2Args": { "n": -1, "price": "" }
            
                                 }));
            
            
            
                             setExitShortIndicatorArgsToShow(
                                 exitShortIndicatorArgsToShow.filter(arg => exitShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({
            
                                     "movingAvg": true
                                 })));
            
            
            
                         }

                else if (indicatorFunc == sent) {

                        setExitShortRules(
                             exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({
                            "indicator1": indicatorFunc,
                            "indicator2": "",
                         })));

                        setExitShortIndicatorArgsToShow(
                            exitShortIndicatorArgsToShow.filter(arg => exitShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({
                             "sentiment": true
                        })));


                }

                else if (momentumIntegerIndicators.indexOf(indicatorFunc) != -1) {


                    setExitShortRules(
                         exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({
                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "price": "" },

                    })));


                    setExitShortIndicatorArgsToShow(
                         exitShortIndicatorArgsToShow.filter(arg => exitShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "momentumIntArgs": true
                    })));

                }

                else if (indicatorFunc == stochfIndicator) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_k_n": -1, "fast_d_n": -1, "fast_d_ma_type": "sma" },

                    })));




                setExitShortIndicatorArgsToShow(
                    exitShortIndicatorArgsToShow.filter(arg => exitShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stochf": true
                    })));
            } else if (indicatorFunc == stochRSI) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "ma_type": "sma", "ma_n": -1 },

                    })));



                setExitShortIndicatorArgsToShow(
                    exitShortIndicatorArgsToShow.filter(arg => exitShortIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "stoch": true
                    })));

                }


                else if (indicatorFunc == ultosc) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));




                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ultosc": true
                    })));

            } else if (indicatorFunc == willr) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));



                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "time_period_1": -1, "time_period_2": -1, "time_period_3": -1 },

                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "willr": true
                    })));

            } else if (indicatorFunc == mfi) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "mfi": true
                    })));


            } else if (oscIndicators.indexOf(indicatorFunc) != -1) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period": -1, "ma_type": "sma" },

                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "osc": true
                    })));


            } else if (indicatorFunc == ohlcvIndicators) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));

                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ohlcv": true
                    })));

            } else if (indicatorFunc == ao) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "ma_type": "sma" },

                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ao": true
                    })));


            } else if (indicatorFunc == adx) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },

                    })));

                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adx": true
                    })));


            } else if (indicatorFunc == bop) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": ""

                    })));

                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "bop": true
                    })));
            } else if (indicatorFunc == cci) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1, "c": 0.15 }
                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "cci": true
                    })));
            } else if (indicatorFunc == demarker) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "period": -1 }
                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "demarker": true
                    })));
            } else if (indicatorFunc == donchian) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 }
                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "donchian": true
                    })));
            } else if (indicatorFunc == macd) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period": -1, "signal_period": -1 }
                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "macd": true
                    })));
            } else if (indicatorFunc == parSar) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "initial_af": 0.02, "step_af": 0.02, "end_af": 0.2 }
                    })));



                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "parSar": true
                    })));
            } else if (indicatorFunc == supertrend) {



                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "period": 7, "multiplier": 3 }
                    })));



                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "supertrend": true
                    })));
            } else if (indicatorFunc == t3) {



                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": indicatorFunc,
                        "indicator1Args": { "n": -1, "v_factor": 0.7 },
                        "indicator2Args": { "n": -1, "v_factor": 0.7 }
                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "T3": true
                    })));
            } else if (indicatorFunc == aroonUp) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "aroon_down",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));



                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonUp": true
                    })));

            } else if (indicatorFunc == aroonDown) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "aroon_up",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonDown": true
                    })));
            } else if (indicatorFunc == aroonOsc) {



                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 },
                    })));



                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "aroonOsc": true
                    })));
            } else if (indicatorFunc == ichimokuA) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n1": -1, "n2": -1 }
                    })));




                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuA": true
                    })));

            } else if (indicatorFunc == ichimokuB) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n3": -1, "n2": -1 }
                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuB": true
                    })));

            } else if (indicatorFunc == ichimokuBase) {


                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": {"n2": -1 }
                    })));



                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ichimokuBase": true
                    })));

            } else if (indicatorFunc == vortexPos) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "vortex_neg",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexPos": true
                    })));

            } else if (indicatorFunc == vortexNeg) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "vortex_pos",
                        "indicator1Args": { "n": -1 },
                        "indicator2Args": { "n": -1 }
                    })));




                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "vortexNeg": true
                    })));
            } else if (indicatorFunc == obv) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator2Args": { "n": -1, "price":"obv" }
                    })));

                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "obv": true
                    })));


            } else if (indicatorFunc == ad) {

                  setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator2Args": { "n": -1, "price":"ad" }
                    })));



                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "ad": true
                    })));

            } else if (indicatorFunc == fi) {

                 setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "n": -1 }
                    })));



                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "fi": true
                    })));
            } else if (indicatorFunc == adsoc) {


                 setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "fast_period": -1, "slow_period":-1 }
                    })));


                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "adsoc": true
                    })));

            } else if (indicatorFunc == bbBandsUp) {

                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));



                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "upperBollinger": true
                    })));
            } else if (indicatorFunc == bbBandsLow) {



                setExitShortRules(
                    exitShortRules.filter(arg => exitShortRules.indexOf(arg) == index - 1).concat(Object.assign({

                        "indicator1": indicatorFunc,
                        "indicator2": "",
                        "indicator1Args": { "price": "", "ma_type": "sma", "n_bdev": 2, "n":-1 }
                    })));

                
                setExitShortIndicatorArgsToShow(
                    exitLongIndicatorArgsToShow.filter(arg => exitLongIndicatorArgsToShow.indexOf(arg) == index - 1).concat(Object.assign({

                        "lowerBollinger": true
                    })));
            } 
            }

        }
        
    };

    const mapRule = rule => {
        return {
            firstIndicator: rule.indicator1,
            secondIndicator: rule.indicator2,
            comparator: rule.comparator,
            firstIndicatorArgs: rule.indicator1Args,
            secondIndicatorArgs: rule.indicator2Args

        };
    };

    const handleSubmit = e => {
        const payload = {
            name: name,
            rules: {
                entry: {
                    long: entryLongRules.map(rule => mapRule(rule)),
                    short: entryShortRules.map(rule => mapRule(rule))
                },
                exit: {
                    long: exitLongRules.map(rule => mapRule(rule)),
                    short: exitShortRules.map(rule => mapRule(rule))
                }
            }
        };
        console.log(payload);
        //alert(JSON.stringify(payload))

    
        axios
            .post("http://localhost:3000/voyant/api/strategy", payload, {
                headers: {
                    "x-access-token": window.localStorage.getItem("voyant-jwt-token")
                }
            })
            .then(response => {
                //alert(response.status);
                console.log("response", response);

            });

            
    };

    const validate = () => {
        console.log("Validated");
    };


    const handleAutocompleteInput = (e, value) => {
        console.log(e.target.value || e.target.innerText)


    }


    const showOverlappingArgs = (obj, type) => {
        var rule = null;

        rule = entryLongRules.filter(rule => rule.id === obj.id)

        return rule.overlappingIndicatorArgs;
    }




    const handleSwitchChange = name => event => {

        //setExperimental(!experimental);

        setState({ ...state, [name]: event.target.checked });

    }





   const showMAField = (obj, index,type) => {

        if (type == "ENTRY_LONG"){

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
                   onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1","n",type)}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj,"indicator1" ,"price",type)}
      
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
              onChange= {e => handleArrayChange(e, index, obj.id, type, "comparator")}

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

              Indicator 2: {entryLongRules[index]["indicator2"]}

            </Typography>




  <Grid  xs={12} spacing={2} container direction="row">
      
               <Grid item xs={6}>
      
                 <TextField
                   
                   fullWidth
                     required
                     type="number"
                   label="Period"
                   margin="normal"
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n",type)}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"price",type)}
      
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

        if (type == "EXIT_LONG"){

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
                   onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1","n",type)}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj,"indicator1" ,"price",type)}
      
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
              onChange= {e => handleArrayChange(e, index, obj.id, type, "comparator")}

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

              Indicator 2: {exitLongRules[index]["indicator2"]}

            </Typography>




  <Grid  xs={12} spacing={2} container direction="row">
      
               <Grid item xs={6}>
      
                 <TextField
                   
                   fullWidth
                     required
                     type="number"
                   label="Period"
                   margin="normal"
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n",type)}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"price",type)}
      
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


        if (type == "ENTRY_SHORT"){

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
                   onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1","n",type)}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj,"indicator1" ,"price",type)}
      
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
              onChange= {e => handleArrayChange(e, index, obj.id, type, "comparator")}

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

              Indicator 2: {entryShortRules[index]["indicator2"]}

            </Typography>




  <Grid  xs={12} spacing={2} container direction="row">
      
               <Grid item xs={6}>
      
                 <TextField
                   
                   fullWidth
                     required
                     type="number"
                   label="Period"
                   margin="normal"
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n",type)}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"price",type)}
      
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

        if (type == "EXIT_SHORT"){

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
                   onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1","n",type)}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj,"indicator1" ,"price",type)}
      
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
              onChange= {e => handleArrayChange(e, index, obj.id, type, "comparator")}

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

              Indicator 2: {exitShortRules[index]["indicator2"]}

            </Typography>




  <Grid  xs={12} spacing={2} container direction="row">
      
               <Grid item xs={6}>
      
                 <TextField
                   
                   fullWidth
                     required
                     type="number"
                   label="Period"
                   margin="normal"
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n",type)}
                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"price",type)}
      
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
        

    }






    const showSentinmentFields = (obj, index,type) => {

        return (<Grid item>
                 <Autocomplete
                options={sentimentVal.map(option => option.name)}
                onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null,type)}
  
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


    const showMomentumIntField = (obj, index,type) => {

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
                 onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n", type)}                   
                   
                 /> 
      
            </Grid>
      
      
      
             <Grid item xs={6}>
      
                <Autocomplete
                    options={feed.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"price",type)}
      
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
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null,type)}
             
           /> 
             
           </Grid>







          </div>


        )

    }


    const showStochfFields = (obj, index,type) => {

        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
      
      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast D period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_d_n", type)}
                         
                         
                       /> 
            
                  </Grid>
            
      
      
      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast K period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_k_n", type)}                         
                         
                       /> 
            
                  </Grid>
            
      
      
      
      
                     <Grid item xs={4}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_d_ma_type",type)}
      
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
            onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null,type)}             
             
           /> 
             
           </Grid>




      
      
            </div>)

    }




    const showStochFields = (obj, index,type) => {

        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
      
      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="RSI Period"
                         margin="normal"

                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n",type)}
                      
                         
                       /> 
            
                  </Grid>
            
      
      


      
                     <Grid item xs={4}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleArrayChange(e, index, obj,"indicator1", "ma_type",type)}
      
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
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"ma_n",type)}
                         
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
            onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null,type)}
             
             
           /> 
             
           </Grid>




      
      
            </div>)

    }



////////////////////////////////////////////

    
const showWillrField = (obj, index, type) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n", type)}           
                         
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
            onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)}             
             
           /> 
             
           </Grid>


           </div>

        )
    }




    const showUltoscFields = (obj, index, type) => {

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
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"time_period_1", type)}                         
                         
                       /> 
            
                  </Grid>


                 <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period 2"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"time_period_2",type)}                          
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period 3"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"time_period_3",type)} 
                         
                         
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
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)} 
             
             
           /> 
             
           </Grid>

           </div>

        )
    }




    const showMFIFields = (obj, index, type) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n", type)} 
                         
                         
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
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)} 
             
             
           /> 
             
           </Grid>


           </div>

        )
    }




    const showOSCFields = (obj, index, type) => {

        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
      
      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_period",type)} 
                         
                         
                       /> 
            
                  </Grid>
            
      
      



      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Slow Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"slow_period",type)} 
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"ma_type",type)} 
      
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
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)} 
             
             
           /> 
             
           </Grid>




      
      
            </div>)
    }





    const showOHLCVFields = (obj, index, type) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Pevious N"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n", type)}
                         
                         
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
             
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)}
             
             
           /> 
             
           </Grid>


           </div>

        )
    }


    const showAOfields = (obj, index, type) => {


        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
    


      
      
                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n", type)}
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                        <Autocomplete
                    options={maTypes.map(option => option.name)}
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"ma_type", type)}
      
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
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)}
             
             
           /> 
             
           </Grid>




      
      
            </div>)

    }


    const showBOPFields = (obj, index, type) => {

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
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)}

                    
                  /> 
                    
                  </Grid>
       
       
                  </div>)

    }




    const showADXFields = (obj, index, type) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n", type)}

                         
                         
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
           onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)}

             
             
           /> 
             
           </Grid>


           </div>

        )
    }



    const showCCIFields = (obj, index, type) => {


        return (<div> 
      
            <Grid item xs={12} container direction="row" spacing={2}>
    


      
      
                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n", type)}

                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Scaling Factor"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"c", type)}

                         
                         
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
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)}

             
             
           /> 
             
           </Grid>




      
      
            </div>)

    }




    const showDemarkerFields = (obj, index, type) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"period",type)}

                         
                         
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
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)}

             
             
           /> 
             
           </Grid>


           </div>

        )
    }



    const showDonchianFields = (obj, index, type) => {

        return (

            <div>

            <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n", type)}

                         
                         
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
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null, type)}

             
             
           /> 
             
           </Grid>


           </div>

        )
    }



    const showMacdFields = (obj, index, type) => {


        return (

            <Grid item xs={12} container direction="row" spacing={2}>
    


      
      
                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Fast Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_period", type)}

                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Slow Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"slow_period", type)}

                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Signal Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"signal_period", type)}

                         
                         
                       /> 
            
                  </Grid>


                  
            
      
      
      
      
            </Grid>
        )

    }





    const showParSarFields = (obj, index, type) => {


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
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"initial_af",type)}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Step AF"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"step_af", type)}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={4}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="End AF"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"end_af", type)}
                         
                         
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



    const showSTFields = (obj, index, type) => {


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
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"period", type)}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Multiplier"
                         margin="normal"
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"multiplier", type)}
                         
                         
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







//////////////////////////////////////////



    const showT3Fields = (obj, index, type) => {


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

                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n",type)}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="V Factor"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"v_factor",type)}
                         
                         
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
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n", type)}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="V Factor"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"v_factor",type)}
                         
                         
                       /> 
            
                  </Grid>

            </Grid>



       



            </div>
        )

    }





    const showAroonFields = (obj, index, upOrDown, type) => {

        return (
            <div> 


                     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1Aroon" ,"n",type)}
                         
                         
                         
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



    const showAroonOscFields = (obj, index, type) => {

        return (
            <div> 


                     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n",type)}
                         
                         
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
             onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null,type)}

             
             
           /> 
             
           </Grid>



                </div>

        )
    }



    const showIchimokuAFields = (obj, index, type) => {

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
              onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,null,type)}

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


    const showIchimokuBFields = (obj, index, type) => {

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
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n2",type)}
                         
                         
                       /> 
            
                  </Grid>



                     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Medium Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n3",type)}
                         
                         
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




    const showIchimokuBaseFields = (obj, index, type) => {

        return (
            <div> 

                     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Medium Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n2",type)}
                         
                         
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







      const showVortexPosFields = (obj, index, type) => {

        return (
            <div>
     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n",type)}
                         
                         
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
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n", type)}
                         
                         
                       /> 
            
    </Grid>



</div>)



    }



    const showVortexNegFields = (obj, index, type) => {

        return (
            <div>
     <Grid item xs={12}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n",type)}
                         
                         
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
                        onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n", type)}
                         
                         
                       /> 
            
    </Grid>



</div>)

    }



    const showOBVFields = (obj, index, type) => {


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
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"ma_type",type)}
      
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
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n", type)}
                         
                         
                       /> 
            
    </Grid>
            
      
      </Grid>


            </div>

        )
    }




    const showADFields = (obj, index, type) => {


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
                    onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"ma_type",type)}
      
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
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2" ,"n", type)}
                         
                         
                       /> 
            
    </Grid>
            
      
      </Grid>


            </div>

        )
    }



    const showFIFields = (obj, index, type) => {


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
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n",type)}
                         
                         
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
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"n",type)}                         
                         
                       /> 
            
    </Grid>

            </div>

        )
    }


    const showADSOCFields = (obj, index, type) => {


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
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"fast_period",type)}
                         
                         
                       /> 
            
    </Grid>

     <Grid item xs={6}>
            
                       <TextField
                         
                         fullWidth
                           required
                           type="number"
                         label="Slow Period"
                         margin="normal"
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"slow_period",type)}
                         
                         
                       /> 
            
    </Grid>


    </Grid>


<Grid>


                         <Autocomplete
              options={comparators.map(option => option.name)}
              onChange= {e => handleArrayChange(e, index, obj, "comparator",type)}

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
                         onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"n",type)}
                         
                         
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
                               onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n",type)}
                               
                               
                             /> 
                  
          </Grid>
      


      
          <Grid item xs={12}>
                  
                             <TextField
                               
                               fullWidth
                                 required
                                 type="number"
                               label="Deviation"
                               margin="normal"
                               onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"n_bdev",type)}
                               
                               
                             /> 
                  
          </Grid>
      
      
      <Grid container direction = "row" xs={12} spacing={2}>
        <Grid item xs={6}>
                  
                              <Autocomplete
                          options={maTypes.map(option => option.name)}
                          onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"ma_type",type)}
            
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
                          onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator1" ,"price",type)}
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
                          onChange= {e => handleIndicatorArgChange(e, index, obj, "indicator2Val" ,"price",type)}
            
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


    const renderForm = (arr, type) => {

    if (type === "ENTRY_LONG")
     {return arr.map((obj, index) => {
     
              return (<Box variant="outlined" border={1}>
           
                       <Grid item xs={12}>
           
           
                       <Autocomplete
                         options={indicators.map(option => option.name)}
                          
                         onChange={e => handleArrayChange(e, index, obj.id, type, "indicator1")}
                         
           
                         renderInput={params => (
           
                     <TextField
                       {...params}
                       fullWidth
                         required
                         type="text"
                       label="Indicator"
                       margin="normal"
                       value={obj.indicator1}
                       
                       name={`indicator1_${obj.id}`}
                       
                       
                     />  )}
                     />
           
                       
                     </Grid>
           
           
                     {entryLongIndicatorArgsToShow[index]["movingAvg"]? showMAField(obj,index,type) : null }
                     {entryLongIndicatorArgsToShow[index]["sentiment"]? showSentinmentFields(obj,index,type) : null }
                     {entryLongIndicatorArgsToShow[index]["momentumIntArgs"]? showMomentumIntField(obj,index,type) : null }
                     {entryLongIndicatorArgsToShow[index]["stochf"]? showStochfFields(obj,index,type) : null }
                     {entryLongIndicatorArgsToShow[index]["stoch"]? showStochFields(obj,index,type) : null }
                     {entryLongIndicatorArgsToShow[index]["willr"]? showWillrField(obj,index,type) : null }
                    {entryLongIndicatorArgsToShow[index]["ultosc"]? showUltoscFields(obj,index,type) : null }
                    {entryLongIndicatorArgsToShow[index]["mfi"]? showMFIFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["osc"]? showOSCFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["ohlcv"]? showOHLCVFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["ao"]? showAOfields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["bop"]? showBOPFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["adx"]? showADXFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["cci"]? showCCIFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["demarker"]? showDemarkerFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["donchian"]? showDonchianFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["macd"]? showMacdFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["parSar"]? showParSarFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["supertrend"]? showSTFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["T3"]? showT3Fields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["aroonUp"]? showAroonFields(obj,index, "Aroon Down") : null }
                    {entryLongIndicatorArgsToShow[index]["aroonDown"]? showAroonFields(obj,index, "Aroon Up") : null }
                    {entryLongIndicatorArgsToShow[index]["aroonOsc"]? showAroonOscFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["ichimokuA"]? showIchimokuAFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["ichimokuB"]? showIchimokuBFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["ichimokuBase"]? showIchimokuBaseFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["vortexPos"]? showVortexPosFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["vortexNeg"]? showVortexNegFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["obv"]? showOBVFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["ad"]? showADFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["fi"]? showFIFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["adsoc"]? showADSOCFields(obj,index, type) : null }
                    {entryLongIndicatorArgsToShow[index]["upperBollinger"]? showBollingerFields(obj,index,"upper") : null }
                    {entryLongIndicatorArgsToShow[index]["lowerBollinger"]? showBollingerFields(obj,index,"lower") : null }
                         
           
                     </Box>)
          })}

    else if (type === "ENTRY_SHORT")
     {return arr.map((obj, index) => {
     
              return (<Box variant="outlined" border={1}>
           
                       <Grid item xs={12}>
           
           
                       <Autocomplete
                         options={indicators.map(option => option.name)}
                          
                         onChange={e => handleArrayChange(e, index, obj.id, type, "indicator1")}
                         
           
                         renderInput={params => (
           
                     <TextField
                       {...params}
                       fullWidth
                         required
                         type="text"
                       label="Indicator"
                       margin="normal"
                       value={obj.indicator1}
                       
                       name={`indicator1_${obj.id}`}
                       
                       
                     />  )}
                     />
           
                       
                     </Grid>
           
           
                     {entryShortIndicatorArgsToShow[index]["movingAvg"]? showMAField(obj,index,type) : null }
                     {entryShortIndicatorArgsToShow[index]["sentiment"]? showSentinmentFields(obj,index,type) : null }
                     {entryShortIndicatorArgsToShow[index]["momentumIntArgs"]? showMomentumIntField(obj,index,type) : null }
                     {entryShortIndicatorArgsToShow[index]["stochf"]? showStochfFields(obj,index,type) : null }
                     {entryShortIndicatorArgsToShow[index]["stoch"]? showStochFields(obj,index,type) : null }
                        {entryShortIndicatorArgsToShow[index]["willr"]? showWillrField(obj,index,type) : null }
                        {entryShortIndicatorArgsToShow[index]["ultosc"]? showUltoscFields(obj,index,type) : null }
                        {entryShortIndicatorArgsToShow[index]["mfi"]? showMFIFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["osc"]? showOSCFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["ohlcv"]? showOHLCVFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["ao"]? showAOfields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["bop"]? showBOPFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["adx"]? showADXFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["cci"]? showCCIFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["demarker"]? showDemarkerFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["donchian"]? showDonchianFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["macd"]? showMacdFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["parSar"]? showParSarFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["supertrend"]? showSTFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["T3"]? showT3Fields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["aroonUp"]? showAroonFields(obj,index, "Aroon Down") : null }
                        {entryShortIndicatorArgsToShow[index]["aroonDown"]? showAroonFields(obj,index, "Aroon Up") : null }
                        {entryShortIndicatorArgsToShow[index]["aroonOsc"]? showAroonOscFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["ichimokuA"]? showIchimokuAFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["ichimokuB"]? showIchimokuBFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["ichimokuBase"]? showIchimokuBaseFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["vortexPos"]? showVortexPosFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["vortexNeg"]? showVortexNegFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["obv"]? showOBVFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["ad"]? showADFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["fi"]? showFIFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["adsoc"]? showADSOCFields(obj,index, type) : null }
                        {entryShortIndicatorArgsToShow[index]["upperBollinger"]? showBollingerFields(obj,index,"upper") : null }
                        {entryShortIndicatorArgsToShow[index]["lowerBollinger"]? showBollingerFields(obj,index,"lower") : null }
     
           
                     </Box>)
          })}

    else if (type === "EXIT_LONG")
     {return arr.map((obj, index) => {
     
              return (<Box variant="outlined" border={1}>
           
                       <Grid item xs={12}>
           
           
                       <Autocomplete
                         options={indicators.map(option => option.name)}
                          
                         onChange={e => handleArrayChange(e, index, obj.id, type, "indicator1")}
                         
           
                         renderInput={params => (
           
                     <TextField
                       {...params}
                       fullWidth
                         required
                         type="text"
                       label="Indicator"
                       margin="normal"
                       value={obj.indicator1}
                       
                       name={`indicator1_${obj.id}`}
                       
                       
                     />  )}
                     />
           
                       
                     </Grid>
           
           
                     {exitLongIndicatorArgsToShow[index]["movingAvg"]? showMAField(obj,index,type) : null }
                     {exitLongIndicatorArgsToShow[index]["sentiment"]? showSentinmentFields(obj,index,type) : null }
                     {exitLongIndicatorArgsToShow[index]["momentumIntArgs"]? showMomentumIntField(obj,index,type) : null }
                    {exitLongIndicatorArgsToShow[index]["stochf"]? showStochfFields(obj,index,type) : null }
                    {exitLongIndicatorArgsToShow[index]["stoch"]? showStochFields(obj,index,type) : null }
                    {exitLongIndicatorArgsToShow[index]["willr"]? showWillrField(obj,index,type) : null }
                    {exitLongIndicatorArgsToShow[index]["ultosc"]? showUltoscFields(obj,index,type) : null }
                    {exitLongIndicatorArgsToShow[index]["mfi"]? showMFIFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["osc"]? showOSCFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["ohlcv"]? showOHLCVFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["ao"]? showAOfields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["bop"]? showBOPFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["adx"]? showADXFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["cci"]? showCCIFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["demarker"]? showDemarkerFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["donchian"]? showDonchianFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["macd"]? showMacdFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["parSar"]? showParSarFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["supertrend"]? showSTFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["T3"]? showT3Fields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["aroonUp"]? showAroonFields(obj,index, "Aroon Down") : null }
                    {exitLongIndicatorArgsToShow[index]["aroonDown"]? showAroonFields(obj,index, "Aroon Up") : null }
                    {exitLongIndicatorArgsToShow[index]["aroonOsc"]? showAroonOscFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["ichimokuA"]? showIchimokuAFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["ichimokuB"]? showIchimokuBFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["ichimokuBase"]? showIchimokuBaseFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["vortexPos"]? showVortexPosFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["vortexNeg"]? showVortexNegFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["obv"]? showOBVFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["ad"]? showADFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["fi"]? showFIFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["adsoc"]? showADSOCFields(obj,index, type) : null }
                    {exitLongIndicatorArgsToShow[index]["upperBollinger"]? showBollingerFields(obj,index,"upper") : null }
                    {exitLongIndicatorArgsToShow[index]["lowerBollinger"]? showBollingerFields(obj,index,"lower") : null }

     
           
                     </Box>)
          })}

 else {
     return arr.map((obj, index) => {

         return (<Box variant="outlined" border={1}>
      
                  <Grid item xs={12}>
      
      
                  <Autocomplete
                    options={indicators.map(option => option.name)}
                     
                    onChange={e => handleArrayChange(e, index, obj.id, type, "indicator1")}
                    
      
                    renderInput={params => (
      
                <TextField
                  {...params}
                  fullWidth
                    required
                    type="text"
                  label="Indicator"
                  margin="normal"
                  value={obj.indicator1}
                  
                  name={`indicator1_${obj.id}`}
                  
                  
                />  )}
                />
      
                  
                </Grid>
      
      
                {exitShortIndicatorArgsToShow[index]["movingAvg"]? showMAField(obj,index,type) : null }
                {exitShortIndicatorArgsToShow[index]["sentiment"]? showSentinmentFields(obj,index,type) : null }
                {exitShortIndicatorArgsToShow[index]["momentumIntArgs"]? showMomentumIntField(obj,index,type) : null }
                {exitShortIndicatorArgsToShow[index]["stochf"]? showStochfFields(obj,index,type) : null }
                {exitShortIndicatorArgsToShow[index]["stoch"]? showStochFields(obj,index,type) : null }
                {exitShortIndicatorArgsToShow[index]["willr"]? showWillrField(obj,index,type) : null }
                {exitShortIndicatorArgsToShow[index]["ultosc"]? showUltoscFields(obj,index,type) : null }
                {exitShortIndicatorArgsToShow[index]["mfi"]? showMFIFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["osc"]? showOSCFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["ohlcv"]? showOHLCVFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["ao"]? showAOfields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["bop"]? showBOPFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["adx"]? showADXFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["cci"]? showCCIFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["demarker"]? showDemarkerFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["donchian"]? showDonchianFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["macd"]? showMacdFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["parSar"]? showParSarFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["supertrend"]? showSTFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["T3"]? showT3Fields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["aroonUp"]? showAroonFields(obj,index, "Aroon Down") : null }
                {exitShortIndicatorArgsToShow[index]["aroonDown"]? showAroonFields(obj,index, "Aroon Up") : null }
                {exitShortIndicatorArgsToShow[index]["aroonOsc"]? showAroonOscFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["ichimokuA"]? showIchimokuAFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["ichimokuB"]? showIchimokuBFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["ichimokuBase"]? showIchimokuBaseFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["vortexPos"]? showVortexPosFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["vortexNeg"]? showVortexNegFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["obv"]? showOBVFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["ad"]? showADFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["fi"]? showFIFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["adsoc"]? showADSOCFields(obj,index, type) : null }
                {exitShortIndicatorArgsToShow[index]["upperBollinger"]? showBollingerFields(obj,index,"upper") : null }
                {exitShortIndicatorArgsToShow[index]["lowerBollinger"]? showBollingerFields(obj,index,"lower") : null }

      
                </Box>)
     })
 }


    }




const traditionalForm = () =>{

    return (
            <div>


      <Form 
        onSubmit={handleSubmit}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="StrategyName"
                    component={TextField}
                    onInput={e => setName(e.target.value)}
                    type="text"
                    label="Strategy Name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" align="left" component="h1">
                    Long Entry Rules
                  </Typography>
                  {renderForm(entryLongRules, "ENTRY_LONG")}
                </Grid>

                <Grid item style={{ marginTop: 12 }}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    onClick={e => addRule("ENTRY_LONG")}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" align="left" component="h1">
                    Short Entry Rules
                  </Typography>
                  {renderForm(entryShortRules, "ENTRY_SHORT")}
                </Grid>

                <Grid item style={{ marginTop: 12 }}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    onClick={e => addRule("ENTRY_SHORT")}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" align="left" component="h1">
                    Long Exit Rules
                  </Typography>
                  {renderForm(exitLongRules, "EXIT_LONG")}
                </Grid>

                <Grid item style={{ marginTop: 12 }}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    onClick={e => addRule("EXIT_LONG")}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" align="left" component="h1">
                    Short Exit Rules
                  </Typography>
                  {renderForm(exitShortRules, "EXIT_SHORT")}
                </Grid>

                <Grid item style={{ marginTop: 12 }}>
                  <Fab
                    color="primary"
                    aria-label="add"
                    onClick={e => addRule("EXIT_SHORT")}
                  >
                    <AddIcon />
                  </Fab>
                </Grid>

                <Grid item style={{ marginTop: 16 }} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
            </div>
        )
}


    return (

        <center>
    <div style={{ padding: 16, maxWidth: 600 }}>
      <CssBaseline />
    <br />


    <Grid>

        <Switch
            checked={state.checkedB}
            onChange={handleSwitchChange('checkedB')}
            value="checkedB"
            color="primary"
            label="Switch to clairvoyance mode"
          />  {state.checkedB? <Typography> Switch to normal mode </Typography> : <Typography> Switch to clairvoyance mode </Typography>}

    </Grid>

        {state.checkedB? <ExperimentalForm /> : traditionalForm()}


    </div>
    </center>
    );
};

export default CreateStrategy;