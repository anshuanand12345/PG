import React from 'react';
import './Contact.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {

  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className='border'>
        <div className='halfcircle'>
        </div>
        <div className='halfcircle2'>
        </div>

        <div className='sidebar'>
          <div className='head'>
            <h1> Contact Info </h1>
          </div>

          <div className='body'>
            <LocationOnIcon />
            <h2>3rd Floor, AKR Tech Park, 7th Mile, Kudlu Gate, Bangalore, Karnataka.</h2>
          </div>

          <div className='body'>
            <EmailIcon />
            <h2>support@ecart.com.</h2>
          </div>

          <div className='body'>
            <CallIcon />
            <h2> 080 6156 1999 </h2>
          </div>

          <div className='down'>
            <FacebookIcon className='one' id='base' />
            <InstagramIcon className='two' id='base' />
            <WhatsAppIcon className='three' id='base' />
            <YouTubeIcon className='four' id='base' />

          </div>
        </div>

        <div className='mainborder'>
          <div className='firstline'>
            <TextField
              id="standard-multiline-flexible"
              label="First Name"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Last Name"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
              variant="standard"
            />
          </div>
          <div className='firstline'>
            <TextField
              id="standard-multiline-flexible"
              label="Email"
              multiline
              maxRows={4}
              value={value}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Number"
              type="number"
              variant="standard"
            />
          </div>
          <div className='firstline'>
            <TextField
              id="standard-multiline-static"
              label="Your Message"
              multiline
              rows={4}
              label="Write your Message..."
              variant="standard"
              className='textfield'
            />
          </div>
          <div className='firstline'>
            <Button variant="contained" className='but'>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;