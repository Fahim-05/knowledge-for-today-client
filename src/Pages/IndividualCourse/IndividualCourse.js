import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LeftSideOptions from '../Shared/LeftSideOptions/LeftSideOptions';
import { Col, Container, Row } from 'react-bootstrap';

const IndividualCourse = () => {
    const oneCourseCard = useLoaderData();
    const { id, about, course_name, image, instructor, obtain, price } = oneCourseCard;
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
                                <Card.Title >{course_name}</Card.Title>
                                <Card.Text className='text-secondary'>
                                    {about}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IndividualCourse;