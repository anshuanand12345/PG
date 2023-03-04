import React from 'react';
import './About.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CastleIcon from '@mui/icons-material/Castle';
import PublicIcon from '@mui/icons-material/Public';
const About = () => {
    return (
        <>
            <div className='about1'>

                <div className='main'>
                    <h1> About Us</h1>
                    <p> Book My PG is a technology-based platform for Booking PG, Serviced Apartments, Shared Flat and Rooms by Location with Specific requirement by filtering by Location, IT Parks, Land Mark, Price, Room type, Amenities, Gender and Food. Presently we have Launched in Platform in Chennai, Coimbatore and Bangalore. We will soon expand to all the Major Cities of the Country
                    </p>
                </div>

                <div className='portion'>
                    <div className='states'>
                        <div className='icons'>
                            <PeopleAltIcon className='icon' />
                        </div>

                        <div className='text'>
                            <h4> Total Guests </h4>
                            <h1> 3500+</h1>
                        </div>
                    </div>

                    <div className='states'>
                        <div className='icons'>
                            <LocationCityIcon className='icon' />
                        </div>

                        <div className='text'>
                            <h4> Total Cities </h4>
                            <h1> 25+</h1>
                        </div>
                    </div>

                    <div className='states'>
                        <div className='icons'>
                            <CastleIcon className='icon' />
                        </div>

                        <div className='text'>
                            <h4> Total PG </h4>
                            <h1> 350+</h1>
                        </div>
                    </div>

                    <div className='states'>
                        <div className='icons'>
                            <PublicIcon className='icon' />
                        </div>

                        <div className='text'>
                            <h4> Total Country </h4>
                            <h1> 12+</h1>
                        </div>
                    </div>
                </div>
                <div className='started'>
                    <div className='pic'>
                        <img src='./image/pic4.jpeg' alt='' />
                    </div>

                    <div className='side'>
                        <div className='textfree'>
                            <h2>How it all started.</h2>
                            <p> We are a set of well-selected and chosen Paying Guest services. This is a platform where those, who are willing to open their homes to guests, meet the people looking for wonderful homes to stay in and not have to look for hotels or favors in any city for their long stays. </p>
                        </div>

                        <div className='textfree'>
                            <h2>How we fix it.</h2>
                            <p> We ensure the places listed and the people looking for a stay are selected based on careful filtering criteria so that both parties benefit and the safety of all involved persons is ensured. We know how important a safe home is to you at both ends of the deal and that is a promise we make.</p>
                        </div>
                    </div>
                </div>


                <div className='started'>

                    <div className='side'>
                        <div className='textfree'>
                            <h2>What are we aiming at ?</h2>
                            <p> To meet our aim, we eliminate the two major problems a guest or host may face. The first of these is a lack of information for anyone new in a city. Our site will list all the information you can seek not just about the house and homeowners but also the locality and other aspects. </p>
                        </div>

                        <div className='textfree'>
                            <h2>Who we are ?</h2>
                            <p> Our aim and motto are simple and singular. To provide the guests with a PG that feels like home best fitting their needs and the homeowners a guest who fits right in. To attain this we work with homeowners and guests to give everyone involved the best possible experience.</p>
                        </div>
                    </div>

                    <div className='pic'>
                        <img src='./image/ap1.jpeg' alt='' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;