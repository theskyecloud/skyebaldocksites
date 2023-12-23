import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';


const NavBar = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navbar className="bg-body-secondary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={{ '*:hover': { cursor: 'pointer' } }} ><h1>Skye Baldock</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title='Portfolio'>
              <NavDropdown.Item onClick={() => navigate('/excel')}>Microsoft Excel</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/')}>SQL</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/')}>Python</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/')}>Tableau</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/')}>PowerBI</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate('/overland')}>Overland Track</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;