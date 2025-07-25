import * as React from 'react';

import Box from '@mui/material/Box';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Test = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        label="Advanced keyboard"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <input ref={startProps.inputRef} {...startProps.inputProps} />
            <Box sx={{ mx: 1 }}> to </Box>
            <input ref={endProps.inputRef} {...endProps.inputProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}

export default Test
