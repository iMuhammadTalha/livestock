/** @format */
import React, { Component } from "react";
import { FuseAnimate } from "@fuse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import { Chart } from 'react-charts'
import {Line} from 'react-chartjs-2';
import { FuseAnimateGroup } from "@fuse";

import {Paper, Typography} from "@material-ui/core";




class GraphList extends Component {
    

    render() {
        const { graphs, dates, bodyTemperatureAvg, atmosphericTemperatureAvg, atmosphericHumidityAvg, beatPerMinAvg, axAvg, ayAvg, azAvg, gxAvg, gyAvg, gzAvg } = this.props;
        let data = graphs;

        if (!Array.isArray(data)) {
            data=[]
        }

        return (
            <div className="w-full p-12">
                <FuseAnimateGroup
                    className="flex flex-wrap"
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    
                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Body Temperature',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: bodyTemperatureAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Body Temperature',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Atmospheric Temperature',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: atmosphericTemperatureAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Atmospheric Temperature',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Atmospheric Humidity',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: atmosphericHumidityAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Atmospheric Humidity',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Beat / Min',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: beatPerMinAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Beat / Min',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Ax',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: axAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Ax',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Ay',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: ayAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Ay',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Az',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: azAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Az',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Gx',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: gxAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Gx',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Gy',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: gyAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Gy',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Gz',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: gzAvg
                                        }
                                        ]
                                    }}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Gz',
                                        fontSize:15
                                        },
                                        legend:{
                                        display:true,
                                        position:'right'
                                        },
                                        scales: {
                                            yAxes: [{
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true,   // minimum value will be 0.
                                                    // suggestedMax: 500
                                                }
                                            }]
                                        }
                                    }}
                                    />
                            </Paper>
                    </div>

                </FuseAnimateGroup>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getGraphsData: Actions.getGraphsData
        },
        dispatch
    );
}

function mapStateToProps({ GraphApp }) {
    
    console.log('Graph APP',GraphApp);
    return {
        bodyTemperatureAvg: GraphApp.GraphReducer.bodyTemperatureAvg,
        atmosphericTemperatureAvg: GraphApp.GraphReducer.atmosphericTemperatureAvg,
        atmosphericHumidityAvg: GraphApp.GraphReducer.atmosphericHumidityAvg,
        beatPerMinAvg: GraphApp.GraphReducer.beatPerMinAvg,
        axAvg: GraphApp.GraphReducer.axAvg,
        ayAvg: GraphApp.GraphReducer.ayAvg,
        azAvg: GraphApp.GraphReducer.azAvg,
        gxAvg: GraphApp.GraphReducer.gxAvg,
        gyAvg: GraphApp.GraphReducer.gyAvg,
        gzAvg: GraphApp.GraphReducer.gzAvg,
        dates: GraphApp.GraphReducer.dates
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GraphList)
);
