import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-50 m-auto bg-secondary p-5 mt-5 rounded'>
            <Form>
                <Form.Group className="mb-3 text-white">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                    
                </Form.Group>

                <Form.Group className="mb-3 text-white">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <p className='text-light'>Do you have account? Please <Link to='/register' className='text-warning'>Register</Link> </p>
                <Button variant="outline-warning" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
            </Form>
        </div>
    );
};

export default Login;