import * as React from 'react';
import Button from '@mui/material/Button';
import QrCode from '../QrCode/QrCode';
import { useSelector, useDispatch } from "react-redux";
import { MuiTelInput } from 'mui-tel-input'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const Success = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const [phone, setPhone] = React.useState('')

  const handleChange = (newPhone) => {
    setPhone(newPhone)
  }
  return (
    <>
    <div style={{marginTop:"100px"}}>
      Dear {user?.result?.name} Your Booking Is Successful!!!!
      <QrCode/>
    </div>
    <div style={{marginRight:"20px",marginTop:"100px",marginBottom:"30px"}}>
    <TextField
          required
          id="outlined-required"
          value={user?.result?.email}
          style={{marginRight:"20px"}}
        />
    <Button variant="contained" disableElevation  endIcon={<SendIcon />}>
      Send Confirmation Email
    </Button>
    </div>
    <MuiTelInput value={phone} onChange={handleChange}  forceCallingCode={false} defaultCountry={'IN'} disableDropdown onlyCountries={['IN']}/>
    <Button  style={{marginLeft:"20px"}} variant="contained" disableElevation>
      Send SMS
    </Button>
    
    
    
    </>
  )
}

export default Success