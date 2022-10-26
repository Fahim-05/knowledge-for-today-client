import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='text-center'>
            <h1 className='text-dark mt-4'>What can we help you <span className='text-danger'>find?</span></h1>

            <div className='w-50 m-auto mt-5 mb-5 border border-success shadow-lg'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header>What about us?</Accordion.Header>
                    <Accordion.Body className='text-secondary bg-light'>
                        <small>We provide Computer Science courses</small>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How can I get Premium access?</Accordion.Header>
                    <Accordion.Body className='text-secondary bg-light'>
                        <small>
                            By Login you can get premium access of selected course.
                        </small>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Which courses we provide?</Accordion.Header>
                    <Accordion.Body className='text-secondary bg-light'>
                        <small>
                            We provide:- Ai, Robotics, data Science, Server, Data Analysis, Networking.
                        </small>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How can I contact with Knowledge For Today?</Accordion.Header>
                    <Accordion.Body className='text-secondary bg-light'>
                        <small>
                            You can email us to <span className='text-primary'>knowledge-for-tofay@edu.bd</span>
                        </small>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        </div>
    );
};

export default FAQ;