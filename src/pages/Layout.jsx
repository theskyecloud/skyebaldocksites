import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';
import {
  Container,
  Nav
 } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Container className="main-page">
        <Outlet />
      </Container>
      <Nav className='justify-content-end footer' as="ul">
        <Nav.Item as="li">
          <Nav.Link href="https://www.linkedin.com/in/skye-baldock-04aa53200/" style={{ color: 'navy' }} >LinkedIn</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href='https://www.facebook.com/skye.baldock.7/' style={{ color: 'navy' }}>Facebook</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href='https://www.instagram.com/thesecretskyeaccount/' style={{ color: 'navy' }}>Instagram</Nav.Link>
        </Nav.Item>
      </Nav>
      
    </>
  );
};

export default Layout;