import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-50 m-auto bg-secondary p-5 mt-1 rounded'>
            <Form>
                <Form.Group className="mb-1 text-white">
                    <Form.Label >Your name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="your name" />
                </Form.Group>

                <Form.Group className="mb-1 text-white">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-1 text-white">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <p className='text-light'>Do you have account? Please <Link to='/login' className='text-warning'>Login</Link> </p>
                <Form.Group className="mb-1 text-warning">
                    <Form.Check type="checkbox" label="Accept terms & conditions" />
                </Form.Group>
                <Button variant="outline-warning" type="submit">
                    Register
                </Button>
                <Form.Text className="text-danger bg-dark">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;