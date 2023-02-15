
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import "./Header.css";
const Header= () => {
  return (
    <header className='myheader'>
      
      <Navbar bg="dark" expand="lg" variant="dark" className='py-3 fixed-top'>
        <Container>
           <Navbar.Brand  as={Link} to="/">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/blog" className='nav-link'>Blog</Link>
            <Link to="/login" className='nav-link'>Login</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </header>
     
  );
}
export default Header;