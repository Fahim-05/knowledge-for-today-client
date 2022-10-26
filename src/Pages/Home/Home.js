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
        <div className="d-flex flex-column align-items-center" style={{backgroundImage: `url("https://images.pexels.com/photos/8099382/pexels-photo-8099382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`, height: '590px'}}>
            <div className='w-50 m-auto text-center'>
                <h2 className='text-dark fs-2 fw-bold' >Welcome to The Planet of <span className='text-success'>Knowledge</span></h2>
                <p className='text-secondary'><small>This is the platform where you can learn more about <span className='text-danger fw-bold'>Computer Science</span>. Just take a tour to our website and choose which one you want to learn with us , and start right now. Thank you sir.</small></p>

                <p><Link to='/course'><Button variant="success">Get Started</Button></Link></p>
            </div>

            {/* <div className='text-center m-auto w-50'>
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
            </div> */}

            <footer className=''>
                <small className='text-dark'>All right reserved @ Fahim Abdullah</small>
            </footer>

        </div>
    );
};

export default Home;