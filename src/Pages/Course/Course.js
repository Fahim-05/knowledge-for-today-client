import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import LeftSideOptions from '../Shared/LeftSideOptions/LeftSideOptions';

const Course = () => {
    const allCourse = useLoaderData();
    // console.log(allCourse);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSideOptions></LeftSideOptions>
                    </Col>
                    <Col lg='9' className='d-flex flex-wrap justify-content-evenly gap-4 mt-2 mb-5 '>
                        {
                            allCourse.map(course => <CourseCard
                            key={course.id}
                            course={course}
                            ></CourseCard>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;