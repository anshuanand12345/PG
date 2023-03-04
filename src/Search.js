import React from 'react';
import './Search.css';

const Search = () => {
    return (

        <div className='search' style={{
            backgroundImage: `url("./image/bg1.png")`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='inp'>
                <h1> <span>B</span>ook <span>M</span>y <span>PG</span> </h1>
            </div>
            <div className='test'>
                <input type="text" name="name" placeholder='Enter city Name...' />
                <button> Search </button>
            </div>

            <div className='city'>

                <div className='site'>
                    <img src='./image/bang.jpeg' alt='' />
                    <h1> Bangalore</h1>
                </div>

                <div className='site'>
                    <img src='./image/chennai.webp' alt='' />
                    <h1> Chennai</h1>
                </div>

                <div className='site'>
                    <img src='./image/kol.jpeg' alt='' />
                    <h1>Kolkata</h1>
                </div>

                <div className='site'>
                    <img src='./image/hyderabad.jpeg' alt='' />
                    <h1>Mumbai</h1>
                </div>

                <div className='site'>
                    <img src='./image/del.webp' alt='' />
                    <h1>Delhi</h1>
                </div>

                <div className='site'>
                    <img src='./image/kerla.avif' alt='' />
                    <h1>Mumbai</h1>
                </div>

                <div className='site'>
                    <img src='./image/del.webp' alt='' />
                    <h1>Kanpur</h1>
                </div>

                <div className='site'>
                    <img src='./image/bang.jpeg' alt='' />
                    <h1>kerla</h1>
                </div>
            </div>
        </div>
    )
}

export default Search;