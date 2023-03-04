import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
    return (
        <>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-500"
                        src="./image/a2.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='sale'>
                        <h3> Best Price </h3>
                        <p>We, at Book My PG, are India's fastest-growing network of managed Paying Guest (PG) rentals.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-500"
                        src="./image/a3.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='sale'>
                        <h3>Summer Sale</h3>
                        <p>Our services across the country will help you find and book Paying Guest (PG) rental homes. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./image/pic1.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='sale'>
                        <h3>Winter Obsession</h3>
                        <p>
                            Our process is simple and very different from those of others in this industry. The search process is streamlined by the locality or landmark of your choice.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-500"
                        src="./image/a1.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='sale'>
                        <h3> Best Price </h3>
                        <p>We, at Book My PG, are India's fastest-growing network of managed Paying Guest (PG) rentals.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default UncontrolledExample;