import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import DeckIcon from '@mui/icons-material/Deck';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    
      const[ show, setshow] = useState(true);

      const handleshow = () =>{
            setshow(!show);
      }

      return (
            <>
            <div className='header'>
                  <div className='logo'>
                        <DeckIcon className='icon' />
                        <h1> <span>B</span>ook <span>M</span>y <span>PG</span> </h1>
                  </div>

                        <div className='menu' style={{ display: show ? "inline" : "none" }}>
                        <Link className='menulink' to="/"> Home </Link>
                        <Link className='menulink' to="/about"> About </Link>
                        <Link className='menulink' to="/gallery"> Gallery </Link>
                        <Link className='menulink' to="/contact"> Contact </Link>
                  </div>

                  <div className='but'>
                        <Link to="/contact">
                              <button className='sign'> Sign Up </button>
                        </Link>
                        <Link to="/signin">
                              <button className='sign'> Sign In </button>
                        </Link>
                  </div>
                  <div className='calen' onClick={handleshow} >
                              {show ? <CloseIcon /> :  <CalendarViewDayIcon />} 

                  </div>
            </div>

                

            </>
      )
}

export default Header;