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
                options.map(option => <p
                    key={`/options/${option.id}`}>
                    <Link to={`/option/${option.id}`}
                    className='text-decoration-none'
                    >
                        {option.name}
                    </Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideOptions;