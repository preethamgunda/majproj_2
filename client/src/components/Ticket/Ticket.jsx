import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TicketPayment from '../Payments/TicketPayment';
import QrCode from '../QrCode/QrCode';


const Ticket = () => {
  const [source,setSource] = useState(0);
  const [destination,setDestination] = useState(0);
  const [sourceval,setSourceval] = useState("");
  const [destinationval,setDestinationval] = useState("");
  const getSource = (event,value) =>{
    setSource(value.price);
    setSourceval(value.label);

  }
  const getDestination = (event,value) =>{
    setDestination(value.price);
    setDestinationval(value.label);
  }
  
  return (
    <>
   
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      style={{marginTop:"100px",marginLeft:"600px"}}
      renderInput={(params) => <TextField {...params} label="Source" />}
      onChange={getSource}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      style={{marginTop:"50px",marginLeft:"600px"}}
      renderInput={(params) => <TextField {...params} label="Destination" />}
      onChange={getDestination}
    />
    <TextField
          id="outlined-number"
          label="Number Of Adults"
          type="number"
          sx={{ width: 280 }}
          style={{marginTop:"50px",marginLeft:"-50px"}}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div style={{marginTop:"50px",marginLeft:"-50px"}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}  >
      <DatePicker disablePast={true} />
    </LocalizationProvider>
    </div>
    
    <Stack direction="row" spacing={2} style={{marginLeft:"700px",marginTop:"30px"}}>
      <TicketPayment source ={source} destination={destination}/>
    </Stack>

    </>
  )
}
const top100Films = [
  { label: 'Hyderabad', price: 10 },
  { label: 'Warangal', price: 20 },
  { label: 'Vijayawada', price:30 },
  { label: 'Vishakapatnam', price:40 },
  { label: 'Khammam', price:50 },
  { label: "Karimnagar", price: 60 },
  { label: 'Nizamabad', price: 70 },
  {
    label: 'Kamareddy',
    id:8,
  },
  { label: 'Adilabad', id:9 },
  { label: 'Ranga Reddy', id:10 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
];
export default Ticket;


