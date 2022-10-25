import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const {providerLogin, signIn }= useContext(AuthContext);

    // google provider
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>  {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.error(error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password )
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate('/');
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        });
    }



    return (
        <div className='w-50 m-auto bg-secondary p-5 mt-1 rounded'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1 text-white">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-1 text-white">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <div>
                    <ButtonGroup className='mt-3 mb-2 d-flex'>
                        <Button onClick={handleGoogleSignIn} variant="outline-light" className='text-dark me-5 rounded'><FaGoogle className='mb-1'></FaGoogle> Login with Google</Button>
                        <Button variant="outline-light" className='text-dark rounded'><FaGithub className='mb-1'></FaGithub> Login with GitHub</Button>
                    </ButtonGroup>

                </div>

                <p className='text-light'>Do you have an account? Please <Link to='/register' className='text-warning'>Register</Link> </p>
                <Button variant="outline-warning" type="submit">
                    Login
                </Button>
                <Form.Text className="text-white bg-danger ms-2 rounded">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;