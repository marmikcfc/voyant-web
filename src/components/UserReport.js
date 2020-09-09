import React, { Component, useState } from "react";
import axios from "axios";
import { Checkbox, Radio, Select } from "final-form-material-ui";
import {
    Typography,
    Paper,
    Link,
    Grid,
    CssBaseline, Divider, Avatar,
    TableContainer, Table, TableRow, TableCell, TableHead, TableBody } from "@material-ui/core";


import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

import { IoIosPeople } from "react-icons/io";

import { RiUserFollowFill, RiTeamFill, RiVideoUploadFill } from "react-icons/ri";


import { BsHeart, BsEye } from "react-icons/bs";

import { FaRegComments , FaRegShareSquare , FaRegCommentDots , FaRegEye  } from "react-icons/fa";





import * as d3 from 'd3';
import stackedArea from 'britecharts/dist/umd/stackedArea.min.js';
import tooltip from 'britecharts/dist/umd/tooltip.min.js';
import miniTooltip from 'britecharts/dist/umd/miniTooltip.min.js';

import brush from 'britecharts/dist/umd/brush.min.js';
import legend from 'britecharts/dist/umd/legend.min.js';
import line from 'britecharts/dist/umd/line.min.js';
import bar from 'britecharts/dist/umd/bar.min.js';
import heatmap from 'britecharts/src/charts/heatmap.js';
const colors = require('britecharts/src/charts/helpers/color');


var json = require('./../jsons/loren-grey-report.json'); 
var _ = require('lodash');


class UserReport extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_json: json,
            engagement_datetime_mapping: [],
            date_post_mapping:[],
            likes_post_mapping:[],
            shares_post_mapping:[],
            comments_post_mapping:[], 
            views_post_mapping:[],
            post_heatmap_mapping: [],
            views_heatmap_mapping: [],
            engagementRate_heatmap_mapping: [],
            engagement_heatmap_mapping:[],
            engagement_day_mapping :[],
            posts_day_mapping: []

        }
    }


    getDataRow = (date,name,val) => {
            let dataRowEng= {}
            dataRowEng['date'] = new Date(date)
            dataRowEng['name'] = name
            dataRowEng['value'] = parseInt(val)
            return dataRowEng;
    }


    getBrushChartDataRow = (date,val) => {
        let row = {}
        row['date'] = new Date(date);
        row['value'] = parseInt(val);

        return row;
    }




    getHeatMapRow = (day,hour,posts) =>{
        let row = {}
        switch (day){
            case 'Monday':
             row['day'] = 0
             break;

            case 'Tuesday':
             row['day'] = 1;
             break;

            case 'Wednesday':
             row['day'] = 2;
             break;

            case 'Thursday':
             row['day'] = 3;
             break;

            case 'Friday':
             row['day'] = 4;
             break;

            case 'Saturday':
             row['day'] = 5;
             break;

            case 'Sunday':
             row['day'] = 6;
             break;

        }

        row['hour'] = hour;
        row['value'] = posts

        return row;


    }



    getHeatMapDataset = (heatmap_data) => {

        let heatmap_dataset = [];

        //alert(post_heatmap_data[0][1]["11"])
        

        heatmap_data.forEach(data => {

           var hour_mapping = Object.entries(data[1]);

           var set = new Set();

           hour_mapping.forEach( hm => {
            set.add(hm[0])
           })

           for (var i =0;i<24;i++){
            if (!set.has(i.toString())){
             // hour_mapping.push([i.toString(), -10])
            }
           }

           hour_mapping.forEach(hm => {

            heatmap_dataset.push(this.getHeatMapRow(data[0],hm[0],hm[1]));
           });

        });   

        return heatmap_dataset;     

    }

    createBarChartDataset = (data) => {
        let dataset = [];

        data.forEach( (d) =>{
            let row = {}
            row['name'] = d[0];
            row['value'] = d[1];

            dataset.push(row); 

        });

        return dataset;

    }


    sortWeekdays = (unordered) => {

        var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        const ordered = {};

            Object.keys(unordered).sort(function (a, b) {
                    return days.indexOf(a) > days.indexOf(b);
                    }).forEach(function(key) {
                ordered[key] = unordered[key];
            });

        return ordered;

    }


    componentDidMount() {

        var engagement_datetime_mapping = json['date_engagement_mapping'];
        var date_post_mapping = json['date_post_mapping'];

        var post_heatmap_data = Object.entries(json['post_heatmap_mapping']);

        var post_heatmap_dataset = this.getHeatMapDataset(post_heatmap_data);


        //Views_HeatMAp

        var views_heatmap_data = Object.entries(json['views_heatmap_mapping']);

        var views_heatmap_dataset = this.getHeatMapDataset(views_heatmap_data);


        let posts_to_day_dataset = this.createBarChartDataset(Object.entries(this.sortWeekdays(json['day_posts_mapping'])))
        let engagement_to_day_dataset = this.createBarChartDataset(Object.entries(this.sortWeekdays(json['day_engagement_rate_mapping'])))



        /*
        alert(JSON.stringify(views_heatmap_dataset[0]))
        alert(JSON.stringify(post_heatmap_dataset[0]))
        */



        //Engagement Heatmap

          //Views_HeatMAp

        var engagement_heatmap_data = Object.entries(json['engagement_heatmap_mapping']);

        var engagement_heatmap_dataset = this.getHeatMapDataset(engagement_heatmap_data);


        //Engagement_Rate Heatmap

          //Views_HeatMAp

        var engagement_rate_heatmap_data = Object.entries(json['engagement_rate_heatmap_mapping']);

        var engagement_rate_heatmap_dataset = this.getHeatMapDataset(engagement_rate_heatmap_data);


        //alert(post_heatmap_data[0][1]["11"])
        

        


        var result = Object.entries(engagement_datetime_mapping);
        var datePostEntries = Object.entries(date_post_mapping)

        var edm = [];
        var lpm = [];
        var cpm = [];
        var spm=  [];
        var vpm = [];

        result.forEach( (res) => {

            let dataRowEng= {}
            let dataRowLikes = {}
            let dataRowShare = {}
            let dataRowComments = {}
            let dataRowViews = {}

            dataRowEng = this.getDataRow(res[0],"Total Engagement", res[1][0]  + res[1][2] )

            dataRowLikes = this.getDataRow(res[0],"Likes", res[1][0] )
            dataRowComments = this.getDataRow(res[0],"Comments", res[1][2] )

            /*
            dataRowShare = this.getDataRow(res[0],"Share", res[1][1] )
            dataRowViews = this.getDataRow(res[0],"Views", res[1][3] )

            /*
            dataRow['date'] = res[0]
            dataRow['total Engagement'] = res[1][0] + res[1][1] + res[1][2] + res[1][3]
            dataRow['likes'] = res[1][0]
            dataRow['share'] = res[1][1] 
            dataRow['comment'] = res[1][2] 
            dataRow['view'] = res[1][3]
            */
            
            edm.push(dataRowEng);
            edm.push(dataRowLikes);
           // edm.push(dataRowShare);
           // edm.push(dataRowViews);
            edm.push(dataRowComments);

            lpm.push(this.getBrushChartDataRow(res[0],res[1][0]));
            cpm.push(this.getBrushChartDataRow(res[0],res[1][2]));
            vpm.push(this.getBrushChartDataRow(res[0],res[1][1]));
            spm.push(this.getBrushChartDataRow(res[0],res[1][3]));

        });

        var dpm = [];


        datePostEntries.forEach( (res,index) => {
            
            dpm.push(this.getBrushChartDataRow(res[0],res[1]));

        })




        this.setState({engagement_datetime_mapping:edm,
                        date_post_mapping:dpm, 
                        likes_post_mapping:lpm,
                        shares_post_mapping:spm,
                        comments_post_mapping:cpm,
                        views_post_mapping:vpm,
                        post_heatmap_mapping: post_heatmap_dataset,
                        views_heatmap_mapping: views_heatmap_dataset,
                        engagement_heatmap_mapping:engagement_heatmap_dataset,
                        engagement_rate_heatmap_mapping: engagement_rate_heatmap_dataset,
                        engagement_day_mapping: engagement_to_day_dataset,
                        posts_day_mapping: posts_to_day_dataset
                    }, () => {
            this.createStackedAreaChart();
            this.createBrushChart();
            
            this.createHeatmapChart('.js-heatmap-engagement-chart-container',this.state.engagement_heatmap_mapping);
            this.createHeatmapChart('.js-heatmap-engagement-rate-chart-container',this.state.engagement_rate_heatmap_mapping);

            this.createViewsHeatmapChart();
            this.createPostHeatmapChart();
            this.createBarChart('.engagement-rate-bar-chart-container',this.state.engagement_day_mapping, 'percent');
            this.createBarChart('.posts-bar-chart-container',this.state.posts_day_mapping,"");

        });


        

     
  }




createBarChart = (chart_container, ds, type) => {

    const tooltip = new miniTooltip();

    let barChart = new bar(),
    barContainer = d3.select(chart_container),
        containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false,
        dataset = ds;


if (type === "percent"){

    barChart
    .width(630)
    .height(300)
    .hasPercentage(true)
    .enableLabels(true)
    .isAnimated(true)
    .colorSchema(colors.colorSchemas.purple)
    .on('customMouseOver', tooltip.show)
    .on('customMouseMove', tooltip.update)
    .on('customMouseOut', tooltip.hide);

barContainer.datum(dataset).call(barChart);



    tooltip.numberFormat('').valueFormatter(value => value.toFixed(2).toString()+"%")

}

else{

     barChart
    .width(630)
    .height(300)
    .enableLabels(true)
    .isAnimated(true)
    .colorSchema(colors.colorSchemas.purple)
    .on('customMouseOver', tooltip.show)
    .on('customMouseMove', tooltip.update)
    .on('customMouseOut', tooltip.hide);

    barContainer.datum(dataset).call(barChart);


}

const tooltipContainer = d3.select(`${chart_container} .bar-chart .metadata-group` );
tooltipContainer.datum([]).call(tooltip);
 
}

createHeatmapChart = (chart_container,ds) => {


    const chartTooltip = new tooltip();

    let heatmapChart = new heatmap(),
        heatmapContainer = d3.select(chart_container),
        containerWidth = heatmapContainer.node() ? heatmapContainer.node().getBoundingClientRect().width : false,
        dataset;

    if (containerWidth) {
        d3.select('.js-download-button').on('click', function () {
            heatmapChart.exportChart('heatmap.png', 'Britecharts Heatmap');
        });

        dataset = ds;

        heatmapChart
            .boxSize(30)
            .colorSchema(colors.colorSchemas.purple)

       
      
        heatmapContainer.datum(dataset).call(heatmapChart);
    }
}




 createPostHeatmapChart = () => {


    const chartTooltip = new tooltip();

    let heatmapChart = new heatmap(),
        heatmapContainer = d3.select(".js-heatmap-posts-chart-container"),
        containerWidth = heatmapContainer.node() ? heatmapContainer.node().getBoundingClientRect().width : false,
        dataset;

    if (containerWidth) {
        d3.select('.js-download-button').on('click', function () {
            heatmapChart.exportChart('heatmap.png', 'Britecharts Heatmap');
        });

        dataset = this.state.post_heatmap_mapping;

        heatmapChart
            .boxSize(30)
            .colorSchema(colors.colorSchemas.purple)

       
      
        heatmapContainer.datum(dataset).call(heatmapChart);
    }
}





createViewsHeatmapChart = () => {


    const chartTooltip = new tooltip();

    let heatmapChart = new heatmap(),
        heatmapContainer = d3.select(".js-heatmap-views-chart-container"),
        containerWidth = heatmapContainer.node() ? heatmapContainer.node().getBoundingClientRect().width : false,
        dataset;

    if (containerWidth) {
        d3.select('.js-download-button').on('click', function () {
            heatmapChart.exportChart('heatmap.png', 'Britecharts Heatmap');
        });

        dataset = this.state.views_heatmap_mapping;

        heatmapChart
            .boxSize(30)
            .colorSchema(colors.colorSchemas.purple)

          
       

        heatmapContainer.datum(dataset).call(heatmapChart);
    }
}






createBrushChart = () =>{

    const chartBrush = new brush();

        const lineChart = new line();
        const chartTooltip = new tooltip();
        const chartLegend = new legend();


        const container = d3.select('.line-container');
        const legendContainer = d3.select('.legend-container');
        const brushContainer = d3.select('.brush-container');

        const containerWidth = container.node().getBoundingClientRect().width;

        // Create Dataset with proper shape
    
      
        const lineData = {
            "dataByTopic": [
                {
                    "topic": -1,
                    "topicName": "Posts",
                    "dates": this.state.date_post_mapping.splice(1,20)
                }

                

                
            ]
        }; 
        

    
        /*
    
        const lineData = {
            "dataByTopic": [
                {
                    "topic": -1,
                    "topicName": "Vivid",
                    "dates": [
                        {
                            "value": 0,
                            "date": "2016-08-01T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-02T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-03T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-04T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-05T00:00:00-07:00"
                        },
                        {
                            "value": 0,
                            "date": "2016-08-06T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-07T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-08T00:00:00-07:00"
                        },
                        {
                            "value": 0,
                            "date": "2016-08-09T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-10T00:00:00-07:00"
                        },
                        {
                            "value": 4,
                            "date": "2016-08-11T00:00:00-07:00"
                        },
                        {
                            "value": 4,
                            "date": "2016-08-12T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-13T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-14T00:00:00-07:00"
                        },
                        {
                            "value": 0,
                            "date": "2016-08-15T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-16T00:00:00-07:00"
                        },
                        {
                            "value": 0,
                            "date": "2016-08-17T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-18T00:00:00-07:00"
                        },
                        {
                            "value": 5,
                            "date": "2016-08-19T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-20T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-21T00:00:00-07:00"
                        },
                        {
                            "value": 8,
                            "date": "2016-08-22T00:00:00-07:00"
                        },
                        {
                            "value": 4,
                            "date": "2016-08-23T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-24T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-25T00:00:00-07:00"
                        },
                        {
                            "value": 5,
                            "date": "2016-08-26T00:00:00-07:00"
                        }
                    ]
                },
                {
                    "topic": 2,
                    "topicName": "Radiant",
                    "dates": [
                        {
                            "value": 3,
                            "date": "2016-08-01T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-02T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-03T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-04T00:00:00-07:00"
                        },
                        {
                            "value": 0,
                            "date": "2016-08-05T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-06T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-07T00:00:00-07:00"
                        },
                        {
                            "value": 4,
                            "date": "2016-08-08T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-09T00:00:00-07:00"
                        },
                        {
                            "value": 4,
                            "date": "2016-08-10T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-11T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-12T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-13T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-14T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-15T00:00:00-07:00"
                        },
                        {
                            "value": 0,
                            "date": "2016-08-16T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-17T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-18T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-19T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-20T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-21T00:00:00-07:00"
                        },
                        {
                            "value": 1,
                            "date": "2016-08-22T00:00:00-07:00"
                        },
                        {
                            "value": 2,
                            "date": "2016-08-23T00:00:00-07:00"
                        },
                        {
                            "value": 3,
                            "date": "2016-08-24T00:00:00-07:00"
                        },
                        {
                            "value": 4,
                            "date": "2016-08-25T00:00:00-07:00"
                        },
                        {
                            "value": 6,
                            "date": "2016-08-26T00:00:00-07:00"
                        }
                    ]
                }
            ]
        }; 
    
            */


        // Configure chart
        lineChart
            .margin({bottom: 50})
            .width(containerWidth)
            .xAxisFormat(lineChart.axisTimeCombinations.DAY_MONTH)
            .colorSchema(colors.colorSchemas.purple)
            .on('customMouseOver', chartTooltip.show)
            .on('customMouseMove', chartTooltip.update)
            .on('customMouseOut', chartTooltip.hide);

        container.datum(lineData).call(lineChart);

        chartTooltip.valueFormatter(value => value)
        
        // Attach tooltip to line chart
        const tooltipContainer = d3.select('.line-container .metadata-group .hover-marker');
        tooltipContainer.call(chartTooltip);

        // Get the legend data
        const legendData = lineData.dataByTopic.map(
            ({ topicName, topic }) => ({
                id: topic,
                name: topicName,
                quantity: 0
            })
        );

        // Configure and draw Legend
        chartLegend
            .height(60)
            .width(containerWidth)
            .isHorizontal(true);

        legendContainer.datum(legendData).call(chartLegend);

        // Get the data format for the brush
        const getDateAndValueReducer = (accum, topic) => {
            topic.dates.forEach((date) => {
                accum.push({
                    date: date.date,
                    value: date.value
                });
            });

            return accum;
        };
        const consolidateDatesReducer = (accum, d) => {
            let found;

            accum.forEach((item) => {
                if (item.date === d.date) {
                    item.value = item.value + d.value;
                    found = true;

                    return;
                }
            });

            if (found) {
                return accum;
            }

            return [d, ...accum];
        };
        const brushData = lineData.dataByTopic
            .reduce(getDateAndValueReducer, [])
            .reduce(consolidateDatesReducer, []);
        const isInRange = (startDate, endDate, {date}) => new Date(date) >= startDate && new Date(date) <= endDate;
        const filterData = (brushStart, brushEnd) => {
            // Copy the data
            let data = JSON.parse(JSON.stringify(lineData));

            // data.dataByDate = data.dataByDate.filter(isInRange.bind(null, brushStart, brushEnd));

            data.dataByTopic = data.dataByTopic.map((topic) => {
                topic.dates = topic.dates.filter(isInRange.bind(null, brushStart, brushEnd));

                return topic;
            });

            return data;
        };

        // Configure the brush chart
        chartBrush
            .width(containerWidth)
            .height(100)
            .xAxisFormat(chartBrush.axisTimeCombinations.DAY_MONTH)
            .margin({ top: 0, bottom: 40, left: 50, right: 30 })
            .on('customBrushEnd', function ([brushStart, brushEnd]) {
                if (brushStart && brushEnd) {
                    let filteredLineData = filterData(brushStart, brushEnd);

                    container.datum(filteredLineData).call(lineChart);
                }
            });

        brushContainer.datum(brushData).call(chartBrush);


        const redrawChart = () => {
            const newContainerWidth = container.node() ? container.node().getBoundingClientRect().width : false;

            // Setting the new width on the chart
            lineChart.width(newContainerWidth);

            // Rendering the chart again
            container.call(lineChart);
        };
        const throttledRedraw = _.throttle(redrawChart, 200);

        window.addEventListener("resize", throttledRedraw);

    return;
}


 createStackedAreaChart =() => {
    let stackedAreaChart = new stackedArea(),
        chartTooltip = new tooltip(),
        dataSet = this.state.engagement_datetime_mapping,
        container = d3.select('.js-stacked-area-chart-tooltip-container'),
        containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
        tooltipContainer;

      stackedAreaChart
        .isAnimated(true)
        .tooltipThreshold(600)
        .grid('horizontal')
      //If keyLabel, dateLabel, valueLabel aren't passed in it does not render?
        .keyLabel('name')
        .colorSchema(colors.colorSchemas.purple)
        .dateLabel('date')
        .valueLabel('value')
        .on('customMouseOver', chartTooltip.show)
        .on('customMouseMove', chartTooltip.update)
        .on('customMouseOut', chartTooltip.hide);

      container.datum(dataSet).call(stackedAreaChart);

      chartTooltip
        .topicLabel('values')
        .title('Engagement')
        .valueFormatter(value => value.toString() )

      tooltipContainer = d3.select('.js-stacked-area-chart-tooltip-container .metadata-group .vertical-marker-container');
      tooltipContainer.datum(dataSet).call(chartTooltip);
}

 numberWithCommas =(x) =>  {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



    render() {

      

        return (
               <center>
    <div style={{ padding: 20 }}>
    	<br />




      <CssBaseline />
    <br />  



    <Typography  align="left"  component="h6" > User Report:  {'\u00A0'} {'\u00A0'}  
        Just a user report
        </Typography>   

         <Grid container spacing={3} direction="row" justify="center" alignItems="baseline">
        
        <Grid item xs={5}>
          <Paper >

           <Grid style={{padding:"2%"}} container alignItems="center" direction="row"  spacing = {3}>

                <div style={{padding:"2%"}}>

                     

                     <Typography variant= "h4"> {this.state.user_json['name']} </Typography>

                       <Typography variant= "h6"> @{this.state.user_json['username']} </Typography>

                       <Typography variant= "legend"> {this.state.user_json['status']} </Typography>

                       <Avatar alt={this.state.user_json["name"]} src={this.state.user_json['avatar']} />


                </div>

               
          
                     <Divider  orientation="vertical" flexItem /> 
                

                 <div style={{padding:"2%"}}>

                    <center>
                        <ul style={{listStyleType: "none"}}>
                        <li style={{padding:"3%"}}>
                            <span style={{display: 'inline-block', width:'200px'}}> 

                            <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <RiTeamFill /> </Avatar>  
                                    <Typography variant="h6"> Fans </Typography>  <Typography variant="body1"> {this.numberWithCommas(parseInt(this.state.user_json['followers']))} </Typography> 
                             </span>
                        </li>

                         <Divider variant="inset" component="li" />

                        <li style={{padding:"3%"}}>
                             <span style={{display: 'inline-block', width:'200px'}}> 

                              <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <RiUserFollowFill /> </Avatar>  
                                    <Typography variant="h6"> Following: </Typography>  <Typography variant="body1"> {this.state.user_json['following']} </Typography> 
                             </span>
                        </li>

                         <Divider variant="inset" component="li" />

                        <li style={{padding:"3%"}}> 
                             <span style={{display: 'inline-block', width:'200px'}}> 

                              <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <RiVideoUploadFill /> </Avatar>  
                                    <Typography variant="h6"> Posts: </Typography>  <Typography variant="body1"> {this.state.user_json['total_posts']} </Typography> 
                             </span>
                        </li>

                        </ul>
                      </center>
                </div>


               
          


           </Grid>

          </Paper>
        </Grid>
        <Grid item xs={7} >
          <Paper >

            <Grid container spacing = {2} style={{ padding: "5%"}} >

                 <Grid item xs={3} style={{ margin: "2%"}} >
                   <span style={{display: 'inline-block', width:'100px'}}> 

                <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <BsEye /> </Avatar>  

                      <Typography variant="label"> <b> Total Views </b> </Typography>  <Typography variant="body1"> {this.numberWithCommas(parseInt(this.state.user_json['view_count']))}  </Typography> 
                </span>

                 </Grid>

                 <Grid item xs={3} style={{ margin: "2%"}} >
                 

                   <span style={{display: 'inline-block', width:'100px'}}> 

                            <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <BsHeart /> </Avatar>  

                                    <Typography variant="label"> <b> Total Likes </b> </Typography>  <Typography variant="body1"> {this.numberWithCommas(parseInt(this.state.user_json['likes_count']))}  </Typography> 
                             </span>



                 </Grid>


                 <Grid item xs={3} style={{ margin: "2%"}} >
                 

                   <span style={{display: 'inline-block', width:'130px'}}> 

                            <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <FaRegComments /> </Avatar>   
                                    <Typography variant="label"> <b> Total Comments </b> </Typography>  <Typography variant="body1"> {this.numberWithCommas(parseInt(this.state.user_json['comment_count']))} </Typography> 
                             </span>


                 </Grid>


            </Grid> 

            <Divider />


           <Grid container spacing = {2} style={{ margin: "2%"}}>

                 <Grid item xs={3} style={{ padding: "2%"}}>
                   <span style={{display: 'inline-block', width:'100px'}}> 

                <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <FaRegShareSquare /> </Avatar>  
                      <Typography variant="label"> <b> Total Shares </b> </Typography>  <Typography variant="body1">  {this.numberWithCommas(parseInt(this.state.user_json['share_count']))} </Typography> 
                </span>

                 </Grid>

                 <Grid item xs={3} style={{ margin: "2%"}} >
                 

                   <span style={{display: 'inline-block', width:'170px'}}> 

                            <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <FaRegCommentDots /> </Avatar>   
                                    <Typography variant="label"> <b> Avg. Engagement/Post </b> </Typography>  <Typography variant="body1"> {this.numberWithCommas(parseInt(this.state.user_json['average_engagement_per_post']))} </Typography> 
                             </span>



                 </Grid>


                 <Grid item xs={3} style={{ margin: "2%"}} >
                 

                   <span style={{display: 'inline-block', width:'170px'}}> 

                            <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <FaRegEye /> </Avatar>  
                                    <Typography variant="label"> <b> Total Engagement Rate </b> </Typography>  <Typography variant="body1"> {this.state.user_json['engagement_rate']}% </Typography> 
                             </span>


                 </Grid>


            </Grid> 


            <Divider />


           <Grid container spacing = {2} style={{ margin: "2%"}}>

                 <Grid item xs={3} style={{ padding: "2%"}}>
                   <span style={{display: 'inline-block', width:'100px'}}> 

                <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <FaRegShareSquare /> </Avatar>  
                      <Typography variant="label"> <b> Avg. Likes/Post </b> </Typography>  <Typography variant="body1">  {this.numberWithCommas(parseInt(this.state.user_json['average_likes_per_post']))} </Typography> 
                </span>

                 </Grid>

                 <Grid item xs={3} style={{ margin: "2%"}} >
                 

                   <span style={{display: 'inline-block', width:'170px'}}> 

                            <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <FaRegCommentDots /> </Avatar>   
                                    <Typography variant="label"> <b> Avg. Comments/Post </b> </Typography>  <Typography variant="body1"> {this.numberWithCommas(parseInt(this.state.user_json['average_comments_per_post']))} </Typography> 
                             </span>



                 </Grid>


                 <Grid item xs={3} style={{ margin: "2%"}} >
                 

                   <span style={{display: 'inline-block', width:'170px'}}> 

                            <Avatar alt="Fans" style={{backgroundColor:"#6C63FF", float:"left"}} > <FaRegEye /> </Avatar>  
                                    <Typography variant="label"> <b> Avg. Views/Post </b> </Typography>  <Typography variant="body1"> {this.state.user_json['average_views_per_post']} </Typography> 
                             </span>


                 </Grid>


            </Grid> 




          </Paper>
        </Grid>
       
      </Grid>



    	<Paper container direction="row" style={{ padding: 20 }}>
    	


    	

     <h2>Engagement - date mapping</h2>
    <div className="britechart js-stacked-area-chart-tooltip-container card--chart"></div>

    </Paper>


     <h2>View- Likes Brush Chart</h2>
        <section >

          { /* <h1>Composing a Data Visualization</h1>
                   <Grid container spacing={3}>
          
                   <Grid item xs={12} sm={6}>
                    <Paper >  
          
                   
                       <div className="legend-container"></div>
                  <div className="brush-container"></div>
          
          
                    </Paper>
          
                  </Grid>
          
                  <Grid item xs={12} sm={6}>
                    <Paper >
          
                     <div className="line-container"></div>
          
               
                    </Paper>
                  </Grid>
          
          
          
                   </Grid> */}



         <Paper >

           <div className="line-container"></div>

     
          </Paper>


          <Paper >  
          
                   
                       <div className="legend-container"></div>
                  <div className="brush-container"></div>
          
          
                    </Paper>



   <Paper >  
          
                   <h2>Post Heatmap</h2>

                       <div className="heatmapContainer js-heatmap-toolkit-container js-heatmap-posts-chart-container"></div>
          
          
                    </Paper>



   <Paper >  
            
            <h2>Views Heatmaps</h2>
                   
                       <div className="heatmapContainer js-heatmap-toolkit-container js-heatmap-views-chart-container"></div>
          
          
                    </Paper>


   <Paper >  
             <h2> Engagement Rate Heatmap </h2>
                   
                       <div className="heatmapContainer js-heatmap-toolkit-container js-heatmap-engagement-rate-chart-container"></div>
          
          
                    </Paper>




   <Paper >  
             <h2> Posts Per Weekday Bar-chart </h2>
                   
                       <div className="posts-bar-chart-container"></div>
          
          
                    </Paper>



   <Paper >  
             <h2> Engagement Rate Per Weekday Bar-chart </h2>
                    

                    <div class="engagement-rate-bar-chart-container bar-chart-tooltip-container card--chart"></div>


          
          
                    </Paper>


    
    

    
     
        
    </section>


 <Grid  container spacing={3} direction="row" >
        
        <Grid item xs={8} sm={4}>
        <br />

             <TableContainer component={Paper} style={{ height:"200px", overflow:"scroll", float:"left", marginTop:"2%"}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <b> Top Tagged Usernames </b> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            {this.state.user_json['most_common_tagged_unames'].map((username, index) => 
(
        <TableRow key={index}>
              <TableCell component="th" scope="row">
                {username}
              </TableCell>
        </TableRow>)
 


            )}
        </TableBody>
        </Table>
        </TableContainer>

        </Grid>


        <Grid item xs={8} sm={4}>
        <br />

        <TableContainer component={Paper} style={{height:"200px", overflow:"scroll", float:"right", marginTop:"2%"}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <b> Top Used Hashtags </b> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            {this.state.user_json['most_common_hashtags'].map((username, index) => 
(
        <TableRow key={index}>
              <TableCell component="th" scope="row">
                {username}
              </TableCell>
        </TableRow>)
 


            )}
        </TableBody>
        </Table>
        </TableContainer>


        </Grid>
        <Grid item xs={8} sm={4}>
          <Paper >

          <ul style={{listStyleType: "none"}}>
                        <li >
                            <span style={{display: 'inline-block', width:'200px'}}> 

                           
                                    <Typography variant="h6"> Average Posts Per Day </Typography>  <Typography variant="body1"> {this.state.user_json['average_posts_per_day']} </Typography> 
                             </span>
                        </li>

                         <Divider variant="inset" component="li" />

                        <li >
                             <span style={{display: 'inline-block', width:'200px'}}> 

                                    <Typography variant="h6"> Average Posts Per Week: </Typography>  <Typography variant="body1"> {this.state.user_json['average_posts_per_week']} </Typography> 
                             </span>
                        </li>

                         <Divider variant="inset" component="li" />

                        <li > 
                             <span style={{display: 'inline-block', width:'200px'}}> 

                                    <Typography variant="h6"> Average Posts Per Month </Typography>  <Typography variant="body1"> {this.state.user_json['average_posts_per_months']} </Typography> 
                             </span>
                        </li>

                        </ul>

     

          </Paper>
        </Grid>
        
      </Grid>



        

    	 
    	

    	</div>
    	</center>
        );
    }
}

export default UserReport;
