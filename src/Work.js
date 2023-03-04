import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PaymentIcon from '@mui/icons-material/Payment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import './Work.css';

const Work = () => {
    return (
        <div className='work'>
            <div className='head'>
                <h1> How it Works.</h1>
                <p> Our process is simple and very different from those of others in this industry. The search process is streamlined by the locality or landmark of your choice. This allows you to find the right hostel or room. You can choose the subscription plan that best suits your needs.</p>
            </div>

            <div className='card'>
                <div className='car'>
                    <div className='img'>
                        <SearchIcon className='icons' />
                    </div>

                    <div className='collar'>
                        <h1> Search </h1>
                        <p> Fill the search fields like your locality,or city,boys pg or girls pg</p>
                    </div>
                </div>

                <div className='car'>
                    <div className='img'>
                        <PaymentIcon className='icons' />
                    </div>

                    <div className='collar'>
                        <h1> Make Payment </h1>
                        <p> Select your PG Rental Home,Sharing Type and make payment Online.</p>
                    </div>
                </div>

                <div className='car'>
                    <div className='img'>
                        <ThumbUpAltIcon className='icons' />
                    </div>

                    <div className='collar'>
                        <h1> Booking Confirmation</h1>
                        <p> Your subscription and booking date confirmed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;