import React, { Component } from 'react';
import './App.css';
import { Doughnut, Line, Bar, defaults } from 'react-chartjs-2';
defaults.global.defaultFontFamily = "'Open Sans Condensed', sans-serif"; // set default chart font family
function getRandomInt(min, max) {   // function to generate random numbers within a range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const colors = ['#4f6d7a', '#c0d6df', '#dbe9ee', '#4a6fa5', '#166088']; // some color schemes
const colors1 = ['#ffa69e', '#faf3dd', '#b8f2e6', '#aed9e0', '#5e6472'];

const getState = () => ({
  labels: [
    'value1',
    'value2',
    'value3'
  ],
  datasets: [{
    label: 'Profit margin',
    fill: true,
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: colors[1],
  }]
});
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Bar Graph',
      backgroundColor: colors[3],
      borderColor: colors[3],
      borderWidth: 1,
      data: [34, 55, 32, 74, 34, 62, 25]
    }
  ]
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      value1: 50,   // values for Doughnut chart
      value2: 100,
      value3: 200,
    }
    setInterval(() => this.forceUpdate(), 1000 * 6) // rerender every 6 seconds, causing bar chart to generate new data
  }
  render() {
    console.log('defaults: ', defaults)
    let data = {
      labels: ['value1', 'value2', 'value3'],
      datasets: [{
        data: [this.state.value1, this.state.value2, this.state.value3],
        backgroundColor: [
          colors1[0],
          colors1[1],
          colors1[2]
        ],
        hoverBackgroundColor: [
          colors1[0],
          colors1[1],
          colors1[2]
        ]
      }]
    }
    return (
      <div className="App">
        <div className='container'>
          <label>Line changing on interval</label>
          <Line
            height={300}
            width={200}
            data={getState()} // will generate random values 
          />
        </div>
        <div className='container'>
          <label>Doughnut with inputs</label>
          <Doughnut
            data={data}
            width={200}
            height={240}
            options={{
              maintainAspectRatio: true
            }}
          /><div className='flex'>
            <div className='box box1' /> <input onChange={(e) => this.setState({ value1: e.target.value })} value={this.state.value1} /></div><div className='flex'>
            <div className='box box2' /><input onChange={(e) => this.setState({ value2: e.target.value })} value={this.state.value2} /></div><div className='flex'>
            <div className='box box3' /><input onChange={(e) => this.setState({ value3: e.target.value })} value={this.state.value3} /></div>
        </div>
      </div >
    );
  }
}
