import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="d-flex flex-column align-items-center" style={{backgroundImage: `url("https://images.pexels.com/photos/7462236/pexels-photo-7462236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`, height: '590px'}}>
            <div className='w-50 m-auto text-center'>
                <h2 className='text-light fs-2 fw-bold' >Welcome to The Planet of <span className='text-warning'>Knowledge</span></h2>
                <p className='text-secondary'><small>This is the platform where you can learn more about <span className='text-danger fw-bold'>Computer Science</span>. Just take a tour to our website and choose which one you want to learn with us , and start right now. Thank you sir.</small></p>

                <p><Link to='/course'><Button variant="success">Get Started</Button></Link></p>
            </div>

            <footer className=''>
                <small className='text-light'>All right reserved @ Fahim Abdullah</small>
            </footer>

        </div>
    );
};

export default Home;