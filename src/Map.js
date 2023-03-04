
import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className='map'>
        <h1> Locations </h1>
          <iframe src="https://www.google.com/maps/d/embed?mid=1VPrLlkGnt-S0ehCE9T8eyzST9mc&ehbc=2E312F" width="640" height="480"></iframe>
    </div>
  )
}

export default Map;