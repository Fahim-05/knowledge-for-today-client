import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const [error, setError] = useState('');

    const { providerLogin, signIn, providerGithubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // google provider
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }


    // github provider
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerGithubSignIn(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(error => console.error(error));
    };




    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });
    }



    return (
        <div className='w-50 m-auto p-5 mt-2 rounded border shadow-lg'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1 text-dark">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-1 text-dark">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <div>
                    <ButtonGroup className='mt-3 mb-2 d-flex'>
                        <Button onClick={handleGoogleSignIn} variant="outline-dark" className='text-primary me-5 rounded'><FaGoogle className='mb-1'></FaGoogle> Login with Google</Button>
                        <Button onClick={handleGithubSignIn} variant="outline-dark" className='text-success rounded'><FaGithub className='mb-1'></FaGithub> Login with GitHub</Button>
                    </ButtonGroup>

                </div>

                <p className='text-dark text-center'>Do you have an account? Please <Link to='/register' className='text-primary text-decoration-none'>Register</Link> </p>
                <div className='text-center'>
                    <Button variant="outline-success" type="submit">
                        Login
                    </Button>
                </div>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;