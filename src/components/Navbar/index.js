import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export function Navbar(props) {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
      <Link to="/"><BootstrapNavbar.Brand href="#home">Welcome</BootstrapNavbar.Brand></Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link><Link to="twitter">Twitter</Link></Nav.Link>
            <Nav.Link><Link to="Youtube">Youtube</Link></Nav.Link>
            <Nav.Link><Link to="Spotify">Spotify</Link></Nav.Link>
            <Nav.Link><Link to="Videos">Videos</Link></Nav.Link>
            <Nav.Link><Link to="Twitch">Twitch</Link></Nav.Link>
            <Nav.Link><Link to="GooglePhotos">Google Photos</Link></Nav.Link>
          </Nav>
          <Button bsStyle="primary" onClick={props.onLogout}>Logout</Button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
