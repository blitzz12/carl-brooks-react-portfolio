import React, { Component } from 'react';
import moment from "moment";



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Carl Brooks Portfolio</h1>
        <PortfolioContainer />
        <PortfolioContainer />
        <PortfolioContainer />
        <PortfolioContainer />
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
