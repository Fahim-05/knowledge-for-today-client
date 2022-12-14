import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Header from '../Pages/Shared/Header/Header';
import LeftSideOptions from '../Pages/Shared/LeftSideOptions/LeftSideOptions';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;