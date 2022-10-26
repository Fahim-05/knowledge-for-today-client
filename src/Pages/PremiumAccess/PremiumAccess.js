import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaCheck, FaDollarSign, FaStar, FaUser } from "react-icons/fa";
import { Image } from 'react-bootstrap';

const PremiumAccess = () => {
    const {premiumAccess, user} = useLoaderData();
    const { id, about, course_name, image, instructor, obtain, price } = premiumAccess;

    return (
        <div className='d-flex justify-content-center mt-3'>
          {[
            'Success'
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '30rem' }}
              className="mb-2 shadow-lg"
            >
              <Card.Header className='text-center text-warning bg-dark'>Premium User<FaStar className='mb-1 ms-3'></FaStar><FaStar className='mb-1 ms-1'></FaStar><FaStar className='mb-1 ms-1'></FaStar></Card.Header>
              <Card.Body>
                <Card.Title className='text-warning text-center'>{course_name}</Card.Title>
                <div>
                <div className='d-flex justify-content-between align-items-center border p-2 rounded mt-4 bg-light'>
                                    <div className='d-flex align-items-center'>
                                        <Image
                                            width="50px"
                                            height="50px"
                                            roundedCircle
                                            src={instructor.img} />
                                        <div className='d-flex flex-column justify-content-center '>
                                            <p className='mb-0 ms-2 text-secondary'><small>Instructor:</small></p>
                                            <p className='ms-2 fs-5 text-dark fw-bold'><small>{instructor.name}</small></p>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-1'>
                                        <p className='me-3 text-success fw-bold'><small><FaCheck className='me-1 fs-5 border border-2 border-success'></FaCheck>Purchased Done</small></p>
                                    </div>
                                </div>
                </div>
                <Card.Text className='text-light'>
                    <small>{about}</small>
                </Card.Text>
                <Card.Text className='text-light'>
                    <p className='text-warning'>NB: - The course video will be uploaded here soon...</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      );
};

export default PremiumAccess;