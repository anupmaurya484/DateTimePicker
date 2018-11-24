import React, { Component } from 'react';
import $ from 'jquery';

type Props = {
    onChange: () => Promise<*>
}

class TimeRangeCustome extends Component<Props, State> {



    componentDidMount() {
       
         // $(".calendar-table").hide();
      }

      _onFocus = () => {
        const that = this;
        $('input[name="timerange"]').daterangepicker({
            timePicker: true,
            datePiker: false,
            locale: {
                format: 'h:mm a'
            }
          }, function(start, end, label) {
              that.props.onChange({start : start.format('hh:mm a'), end :end.format('hh:mm a')})
          })
          $(".calendar-table").hide();  
      }

      
    render() {
        return (
            <div id="time">
                <input 
                type="text" 
                onBlur={this._onBlur}
                onFocus={this._onFocus} 
                id="timerange" name="timerange"  />
            </div>

        );
    }
}

export default TimeRangeCustome;
