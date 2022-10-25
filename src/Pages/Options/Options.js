import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideOptions from '../Shared/LeftSideOptions/LeftSideOptions';

const Options = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='4'>
                        <LeftSideOptions></LeftSideOptions>

                    </Col>
                    <Col lg='8'>
                        <h3>This is options</h3>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Options;