import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

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
            form.reset();
        })
        .catch(error=> console.error(error));

    }

    return (
        <div className='w-50 m-auto bg-secondary p-5 mt-1 rounded'>
            <Form onSubmit={handleSubmit}>
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
                
                <p className='text-light mt-2'>Already have an account? Please <Link to='/login' className='text-warning'>Login</Link> </p>
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