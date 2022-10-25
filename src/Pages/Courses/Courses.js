import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import LeftSideOptions from '../Shared/LeftSideOptions/LeftSideOptions';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='4'>
                        <LeftSideOptions></LeftSideOptions>
                    </Col>
                    <Col lg='8'>
                        <Course></Course>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;