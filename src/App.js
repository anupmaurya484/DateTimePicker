import React, { Component } from 'react';
import DateRange from './component/DateRange';
import TimeRange from './component/TimeRange';
import daterangepicker from 'daterangepicker';
import DateRangeCustome from './component/DateRangeCustome';
import TimeRangeCustome from './component/TimeRangeCustome';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onChange(e) {
    console.log(e);
    var data = {start : e.start, end : e.end }
  }



  render() {
    return (
      <div className="App">
          <DateRange onChange={this.onChange}></DateRange>  {/* Used antd Packages*/}
          <p>Used antd Packages</p>
          <br></br>
          <TimeRange onChange={this.onChange}></TimeRange>{/* Used antd Packages*/}
          <p>Used antd Packages</p>
          <br></br>
          <DateRangeCustome onChange={this.onChange}></DateRangeCustome> {/* Used Custome DateRange*/}
          <p>Used Custome DateRange and <b>check console log in date DateRange variable</b></p>
          <TimeRangeCustome onChange={this.onChange}></TimeRangeCustome> {/* Used Custome TimeRange*/}
          <p>Used Custome DateRange and <b>check console log in date DateRange variable</b></p>
      </div>
    );
  }
}

export default App;
