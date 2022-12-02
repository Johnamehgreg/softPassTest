import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import React from 'react';



interface Props {
  isOpen: boolean;
  setisOpen:(value:boolean) => void;
}

const AppDatePicker: React.FC<Props> = ({ isOpen, setisOpen }) => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
    setisOpen(false)
  };
  
  return (
    <Space direction="vertical">
      <DatePicker
        autoFocus={true}
        bordered={false}
        open={isOpen}
        onBlur={()=> setisOpen(false)}
        onChange={onChange} />

    </Space>
  )
}

export default AppDatePicker;