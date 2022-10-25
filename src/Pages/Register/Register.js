import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { createUser } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });

    }

    return (
        <div className='w-50 m-auto shadow-lg border p-5 mt-2 mb-5 rounded'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="text-dark mt-0">
                    <Form.Label >Your name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="your name" />
                </Form.Group>

                <Form.Group className="mt-1 text-dark">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mt-1 text-dark">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <p className='text-dark mt-1 text-center'>Already have an account? Please <Link to='/login' className='text-primary text-decoration-none'>Login</Link> </p>
                <Form.Group className="text-success">
                    <Form.Check type="checkbox" label="Accept terms & conditions" />
                </Form.Group>
                <div className='text-center mt-1'>
                    <Button variant="outline-success" type="submit">
                        Register
                    </Button>
                </div>
                <Form.Text className="text-danger mb-0">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;