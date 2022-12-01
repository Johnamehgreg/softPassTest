// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Select } from 'antd';
import * as React from 'react';

interface Props {
  options:any[],
  onChange: (e:any) => void;
  placeholder:string;
}
const AppSelect:React.FC<Props> =({options, onChange, placeholder}) => {
  const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };

  return (
    <>
      
    
      <Select
      defaultValue={placeholder}
      placeholder={'Hello'}
      style={{ width: '100%', marginBottom: '20px' }}
      onChange={(e) => onChange(e)}
      options={options}
      size='large'
    />
    </>
  );
}

export default AppSelect;


