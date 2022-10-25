import React from 'react';
import { useLoaderData } from 'react-router-dom';
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

            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSideOptions></LeftSideOptions>

                    </Col>
                    <Col lg='9' className='w-50 m-auto mt-5'>
                        <Card style={{ width: 600 }}>
                            <Card.Img variant="top" height={350} src={image} />
                            <Card.Body>
                                <Card.Title className='text-center fw-bold fs-4 text-success'>{course_name}</Card.Title>

                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center mt-2'>
                                        <Image
                                            width="70px"
                                            height="70px"
                                            roundedCircle
                                            src={instructor[0].img} />
                                        <p className='ms-2 mt-1 fw-bold'>{instructor[0].name}</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-1'>
                                        <p className='me-5 text-danger fw-bold'><FaDollarSign className='mb-1'></FaDollarSign>{price}</p>
                                        <p className='text-success fw-bold'><FaUser className='mb-1 me-1'></FaUser>{obtain}</p>
                                    </div>
                                </div>

                                <Card.Text className='text-secondary'>
                                    {about}
                                </Card.Text>
                                <Button variant="success">Go All Courses</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IndividualCourse;