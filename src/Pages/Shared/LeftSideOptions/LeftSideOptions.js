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
        <div>
            <h2>Options: {options.length}</h2>
            {
                options.map(course => <p
                    key={`/course/${course.id}`}>
                    <Link to={`/course/${course.id}`}
                    className='text-decoration-none'
                    >
                        {course.name}
                    </Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideOptions;