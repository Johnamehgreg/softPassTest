import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dateFormat from 'dateformat';
import React from 'react';



interface Props {
  isOpen: boolean;
  setisOpen:(value:boolean) => void;
  setdateRange:React.Dispatch<any>
  
}

const { RangePicker } = DatePicker;


const AppDatePicker: React.FC<Props> = ({ isOpen, setisOpen, setdateRange  }) => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
    setisOpen(false)
  };
  
  return (
    <Space direction="vertical">
      <RangePicker
        autoFocus={true}
        bordered={false}
        onChange={(e:any) => {
        
          setdateRange({
            
            startDate: dateFormat(e[0], "yyyy-mm-dd") ,
            endDate: dateFormat(e[1], "yyyy-mm-dd") 
          })
          setisOpen(false)
        }}
        open={isOpen}
        onBlur={()=> setisOpen(false)}
       
        
        />

    </Space>
  )
}

export default AppDatePicker;