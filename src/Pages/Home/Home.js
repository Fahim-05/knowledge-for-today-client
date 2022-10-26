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
                <h2 className='text-dark mt-1' >Welcome to The Planet of <span className='text-success fs-1 fw-bold'>Knowledge</span></h2>
                <p className='text-secondary'><small>This is the platform where you can learn more about <span className='text-danger fw-bold'>Computer Science</span>. Just take a tour to our website and choose which one you want to learn with us , and start right now. Thank you sir.</small></p>

                <p><Link to='/course'><Button variant="outline-success">Get Started</Button></Link></p>
            </div>

            <div className='text-center m-auto w-50'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="rounded"
                            width='500px'
                            height='300px'
                            src={slide1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="rounded"
                            width='500px'
                            height='300px'
                            src={slide2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="rounded"
                            width='500px'
                            height='300px'
                            src={slide3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="rounded"
                            width='500px'
                            height='300px'
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