import { Route, Routes } from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Blog from './Blog';
import Home from './Home';
import Header from "./Header";
import './App.css';
import UncontrolledExample from './Slider';
import Footer from "./Footer";
import Signin from './Signin';

function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/gallery" element={<Blog />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
