import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import slide4 from '../../assets/images/slide4.jpg'

const Home = () => {
    return (
        <div className="">
            <div className='w-50 m-auto text-center'>
                <h1 className='text-success mt-1 '>Welcome to <span className='text-danger'>The Planet of Knowledge</span></h1>
                <p className='text-secondary'>This is the platform where you can learn more what you want. Just take a course which you prefer, and start right now</p>

                <p><Link to='/course'><Button variant="outline-success">Get Started</Button></Link></p>
            </div>

            <div className='text-center m-auto'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="rounded"
                            width={400}
                            src={slide1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="rounded"
                            width={400}
                            src={slide2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="rounded"
                            width={400}
                            src={slide3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="rounded"
                            width={400}
                            src={slide4}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Home;