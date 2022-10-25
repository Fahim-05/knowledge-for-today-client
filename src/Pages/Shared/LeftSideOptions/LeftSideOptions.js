import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideOptions = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-options')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, [])

    return (
        <div className='bg-secondary p-2 mt-2 rounded'>
            <h2 className='text-warning text-center'>Courses</h2>
            <hr className='text-warning'></hr>
            {
                options.map(course => <p
                    key={`/course/${course.id}`}>
                    <Link to={`/course/${course.id}`}
                    className='text-decoration-none text-warning fs-4'
                    >
                        {course.id}. {course.name}
                    </Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideOptions;