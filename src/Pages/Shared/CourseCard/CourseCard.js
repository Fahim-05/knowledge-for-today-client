import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const CourseCard = ({course}) => {
    const {image, course_name, about, obtain, id} = course;
    // console.log(course);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-success'>{course_name}</Card.Title>
                    <p className='text-secondary'><small>Purchased:  {obtain}<FaUser className='mb-2'></FaUser></small></p>
                    <Card.Text className='text-secondary'>
                        { about.length > 40 ?
                        <>{about.slice(0,40) + '...'} <Link to={`/course/${id}`} className='text-decoration-none'>See details</Link></>
                        :
                        <>{about}</>
                        }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;