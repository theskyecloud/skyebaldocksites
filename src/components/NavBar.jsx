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
        <Navbar.Brand onClick={() => navigate('/')} className='header-title' ><h1>Skye Baldock</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title='Portfolio'>
              <NavDropdown.Item onClick={() => navigate('/canva-project')}>Full Stack Canva Project</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/uber-discounts')}>Full Stack Discount Exchanging Web App</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/slackr')}>React with Material UI Frontend Web App</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/airbrb')}>Vanilla Javascript Frontend Web App</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/data-analysis')}>Data Analysis</NavDropdown.Item>
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