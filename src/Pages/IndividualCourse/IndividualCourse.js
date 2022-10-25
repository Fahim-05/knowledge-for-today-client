import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LeftSideOptions from '../Shared/LeftSideOptions/LeftSideOptions';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaDollarSign, FaUser } from "react-icons/fa";

const IndividualCourse = () => {
    const oneCourseCard = useLoaderData();
    const { id, about, course_name, image, instructor, obtain, price } = oneCourseCard;
    console.log(oneCourseCard)
    return (
        <div>

            <Container className='mb-5'>
                <Row>
                    <Col lg='3'>
                        <LeftSideOptions></LeftSideOptions>

                    </Col>
                    <Col lg='9' className=' m-auto mt-2'>
                        <Card className='shadow rounded-lg'>
                            <Card.Img variant="top" height={400} src={image} />
                            <Card.Body>
                                <Card.Title className='text-center fw-bold fs-4 text-success'>{course_name}</Card.Title>

                                <div className='d-flex justify-content-between align-items-center border p-2 rounded mt-4 bg-light'>
                                    <div className='d-flex align-items-center'>
                                        <Image
                                            width="70px"
                                            height="70px"
                                            roundedCircle
                                            src={instructor.img} />
                                        <div className='d-flex flex-column justify-content-center'>
                                            <p className='mb-0 ms-2 text-secondary'>Instructor:</p>
                                            <p className='ms-2 fw-bold'>{instructor.name}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-1'>
                                        <p className='me-3 text-danger fw-bold'>Price: <FaDollarSign className='mb-1'></FaDollarSign>{price}</p>
                                        <p className='text-success fw-bold'>Done: <FaUser className='mb-1 me-1'></FaUser>{obtain}</p>
                                    </div>
                                </div>

                                <Card.Text className='text-secondary mt-3'>
                                    {about}
                                </Card.Text>
                                <div className='text-center'>
                                    <Link to='/premium'><Button variant="success">Get Premium Access</Button></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IndividualCourse;