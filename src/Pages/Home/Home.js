import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="d-flex flex-column align-items-center" style={{backgroundImage: `url("https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1020.9375&fit=crop&crop=faces")`, height: '589px'}}>
            <div className='w-50 m-auto text-center'>
                <h2 className='text-dark fs-2 fw-bold' >Welcome to The Planet of <span className='text-danger'>Knowledge</span></h2>
                <p className='text-light'><small>This is the platform where you can learn more about <span className='text-primary fw-bold'>Computer Science</span>. Just take a tour to our website and choose which one you want to learn with us , and start right now. Thank you sir.</small></p>

                <p><Link to='/course'><Button variant="success">Get Started</Button></Link></p>
            </div>

            <footer className=''>
                <small className='text-dark'>All right reserved @ Fahim Abdullah</small>
            </footer>

        </div>
    );
};

export default Home;