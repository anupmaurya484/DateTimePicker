import React, { Component } from 'react';
import $ from 'jquery';

type Props = {
    onChange: () => Promise<*>
}

class DateRangeCustome extends Component<Props, State> {



    componentDidMount() {
        const that = this;
      
      }

      _onFocus = () => {
        const that = this;
        $('input[name="daterange"]').daterangepicker({
            opens: 'left'
          }, function(start, end, label) {
            that.props.onChange({start : start.format('YYYY-MM-DD'),end :end.format('YYYY-MM-DD')})
          })
          $(".calendar-table").show();
      }

   

    render() {
        return (
            <div>
                <input 
                type="text" 
                onBlur={this._onBlur}
                onFocus={this._onFocus} 
                id="daterange" 
                name="daterange"  />
            </div>

        );
    }
}

export default DateRangeCustome;
