import { useState } from 'react';
import './Review.css';
import Data from './Data';


function App() {


    const [index, setindex] = useState(0);
    const { id, name, discription, Image } = Data[index];

    const checknumber = (number) => {
        if (number > Data.length - 1) {
            return 0;
        }

        if (number < 0) {
            return Data.length - 1;
        }
        return number;
    }

    const prev = () => {
        setindex((index) => {
            let newindex = index - 1;
            return checknumber(newindex);
        });
    };

    const next = () => {
        setindex((index) => {
            let newindex = index + 1;
            return checknumber(newindex);
        });
    };
    return (
        <>

          <div className='sauce'>
           <h1 className='testy'> Testimonials </h1>
            <div className='tool'>
                <div className='kit' key={id}>

                    <div className='pic'>
                        <img src={Image} alt='name' />
                    </div>


                    <div className='det'>
                        <div className='extra'>
                            <p> "{discription}" </p>
                            <h1>  ~{name}</h1>

                        </div>
                    </div>

                    <div className='polo'>
                            <h2 onClick={prev} className='eku'> Prev </h2>
                            <h2 onClick={next} className='eku'> Next </h2>
                    </div>

                </div>
            </div>
            </div>
        </>
    );
}

export default App;