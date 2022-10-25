import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image
                        src={logo}
                        width="60"
                        height="60"
                    ></Image>
                    <Navbar.Brand className=''>Knowledge For Today</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto gap-3">
                            <Link className='text-decoration-none text-warning' to='/'>Home</Link>
                            <Link className='text-decoration-none text-warning' to='/course'>Courses</Link>
                            <Link className='text-decoration-none text-warning' to='/blog'>Blog</Link>
                            <Link className='text-decoration-none text-warning' to='/faq'>FAQ</Link>
                        </Nav>
                        <Nav className='gap-2'>
                            <Nav.Link >
                                {
                                    user.uid ?
                                        <>
                                            <Link className='text-decoration-none text-white me-4 border px-2 py-1 rounded bg-danger'>Log out</Link>
                                            <span>{user?.displayName}</span>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>

                                }

                            </Nav.Link>
                            <Nav.Link >
                                {user.photoURL ?
                                    <Image
                                        style={{ height: '40px' }}
                                        roundedCircle
                                        src={user?.photoURL}
                                    ></Image>
                                    :
                                    <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;