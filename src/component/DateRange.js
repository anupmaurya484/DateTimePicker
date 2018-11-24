import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

type Props = {
    onChange: () => Promise<*>
}

class DateRange extends Component<Props, State> {



    onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        this.props.onChange({start :dateString[0],end : dateString[1]})
      }
      
   
      

    render() {
        return (
            <div>
                <RangePicker
                    format="YYYY-MM-DD"
                    placeholder={['Start Time', 'End Time']}
                    onChange={this.onChange}
                    onOk={this.onOk}
                />
            </div>

        );
    }
}

export default DateRange;
