import React from 'react';
import Header from './Header';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import UncontrolledExample from './Slider'
import Search from './Search';
import Work from './Work';
import Review from './Review';
import MapContainer from './Map';

const Home = () => {
  return (
    <div>
    <Search />
          <UncontrolledExample />
          <About />
          <Work />
          <Review />
      <MapContainer />
      <Contact />
        
          
    
    </div>
  )
}

export default Home;