import React, { Component } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

class TimeRange extends Component {

  onChange = (time,dateString) => {
    console.log(dateString)
  }

  render() {
    return (
          <div style={{display : "flex" ,margin: "0 auto",width: "250px"}}>
            <TimePicker onChange={this.onChange} placeholder="Start time" style={{marginRight : "2px"}} />
            <TimePicker onChange={this.onChange} placeholder="End time"/>
          </div>
     );
  }
}

export default TimeRange;
