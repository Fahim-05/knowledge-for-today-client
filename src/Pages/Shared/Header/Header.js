import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
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
                        <Nav className="me-auto">
                            <Nav.Link ><Link  className='text-decoration-none text-warning' to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link className='text-decoration-none text-warning' to='/course'>Courses</Link></Nav.Link>
                            <Nav.Link><Link className='text-decoration-none text-warning' to='/blog'>Blog</Link></Nav.Link>
                            <Nav.Link><Link className='text-decoration-none text-warning' to='/faq'>FAQ</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link >{user?.displayName}</Nav.Link>
                            <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                            <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;