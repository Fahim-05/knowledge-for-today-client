import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const LeftSideOptions = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('https://knowledge-for-today-server.vercel.app/course-options')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])

    return (
        <div className='shadow-lg p-2 mt-2 rounded'>
            <h2 className='text-secondary text-center'>Courses</h2>
            <hr className='text-secondary'></hr>
            {
                options.map(course => <p
                    key={`/course/${course.id}`}>
                    <Link to={`/course/${course.id}`}
                    className='text-decoration-none text-success text-start'>

                        <Button variant="outline-success" className=''><small>{course.id}. {course.name}</small></Button>
                    </Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideOptions;