import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const {providerLogin }= useContext(AuthContext);


    // google provider
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>  {
        providerLogin(googleProvider)
        .thee(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }



    return (
        <div className='w-50 m-auto bg-secondary p-5 mt-1 rounded'>
            <Form>
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
                <Form.Text className="text-danger bg-dark">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;