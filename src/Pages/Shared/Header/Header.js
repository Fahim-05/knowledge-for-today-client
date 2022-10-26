import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Tooltip from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Header = () => {
    const [theme, setTheme] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    // theme toggler
    const toogleTheme = () => {
        if (theme === true) {
            setTheme(false);
            console.log(theme);
        } else {
            setTheme(true);
            console.log(theme);
        }
    }

    // useEffect(()=>{
    //        document.body.className = theme;
    // },[theme])

    return (
        <div>
            {
                theme ?
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Image
                                src={logo}
                                width="60"
                                height="60"
                            ></Image>

                            <Navbar.Brand className='text-white fw-bold'>Knowledge For Today</Navbar.Brand>

                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto gap-3">
                                    <Link className='text-decoration-none text-warning' to='/'>Home</Link>
                                    <Link className='text-decoration-none text-warning' to='/course'>Courses</Link>
                                    <Link className='text-decoration-none text-warning' to='/blog'>Blog</Link>
                                    <Link className='text-decoration-none text-warning' to='/faq'>FAQ</Link>
                                </Nav>
                                <Nav className='gap-2'>
                                    <Nav.Link className='mt-1'>
                                        {
                                            user?.uid ?
                                                <>
                                                    <Link onClick={handleLogOut} className='text-decoration-none text-white me-4 border px-2 py-1 rounded bg-danger'>Log out</Link>
                                                    <span className='text-white bg-success px-1 rounded' >{user?.displayName}</span>
                                                </>
                                                :
                                                <>
                                                    <Link className='text-decoration-none me-3 text-light' to='/login'>Login</Link>
                                                    <Link className='text-decoration-none me-2 text-light' to='/register'>Register</Link>
                                                </>

                                        }

                                    </Nav.Link>
                                    <Nav.Link>
                                        {user?.photoURL ?
                                            <Image

                                                className='border border-success border-4 tt'
                                                data-bs-placement='bottom'
                                                title={user?.displayName}
                                                style={{ height: '40px' }}
                                                roundedCircle
                                                src={user?.photoURL}
                                            ></Image>
                                            :
                                            <FaUser className='mb-1 text-danger'></FaUser>
                                        }
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                        <div className='text-white me-2 d-flex align-items-center gap-1'>
                            <FaSun className='text-secondary me-2'></FaSun>
                            <Form>
                                <Form.Check
                                    onClick={() => toogleTheme(theme)}

                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                            <FaMoon className='text-warning'></FaMoon>
                        </div>
                    </Navbar>


                    :



                    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                        <Container>
                            <Image
                                src={logo}
                                width="60"
                                height="60"
                            ></Image>
                            {
                                theme ?
                                    <Navbar.Brand className='text-dark'>Knowledge For Today
                                    </Navbar.Brand> :
                                    <Navbar.Brand className='text-dark fw-bold'>Knowledge For Today
                                    </Navbar.Brand>
                            }
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto gap-3">
                                    <Link className='text-decoration-none' to='/'>Home</Link>
                                    <Link className='text-decoration-none' to='/course'>Courses</Link>
                                    <Link className='text-decoration-none' to='/blog'>Blog</Link>
                                    <Link className='text-decoration-none' to='/faq'>FAQ</Link>
                                </Nav>
                                <Nav className='gap-2'>
                                    <Nav.Link className='mt-1'>
                                        {
                                            user?.uid ?
                                                <>
                                                    <Link onClick={handleLogOut} className='text-decoration-none text-white me-4 border px-2 py-1 rounded bg-danger'>Log out</Link>
                                                    <span className='text-white bg-success px-1 rounded' >{user?.displayName}</span>
                                                </>
                                                :
                                                <>
                                                    <Link className='text-decoration-none me-3 text-success' to='/login'>Login</Link>
                                                    <Link className='text-decoration-none me-2 text-success' to='/register'>Register</Link>
                                                </>

                                        }

                                    </Nav.Link>
                                    <Nav.Link>
                                        {user?.photoURL ?
                                            <Image

                                                className='border border-success border-4 tt'
                                                data-bs-placement='bottom'
                                                title={user?.displayName}
                                                style={{ height: '40px' }}
                                                roundedCircle
                                                src={user?.photoURL}
                                            ></Image>
                                            :
                                            <FaUser className='mb-1 text-danger'></FaUser>
                                        }
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                        <div className='text-white me-2 d-flex align-items-center gap-1'>
                            <FaSun className='text-warning me-2'></FaSun>
                            <Form >
                                <Form.Check
                                    onClick={() => toogleTheme(theme)}

                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                            <FaMoon className='text-secondary'></FaMoon>
                        </div>
                    </Navbar>
            }
        </div>
    );
};

export default Header;