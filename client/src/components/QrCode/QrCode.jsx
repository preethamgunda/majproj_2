import QRCode from 'qrcode.react';
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from "react-redux";

const QrCode = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));

 const Name=user?.result?.name;
 const email=user?.result?.email;

 const finalQr = Name+' '+email;
  const[button,setButton] = useState(false);
  

    
    
  return (
    <div style={{marginTop:"100px"}}>
    <QRCode value={finalQr} />
      

      

    </div>
  )
}

export default QrCode