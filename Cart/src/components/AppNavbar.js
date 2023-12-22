
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function AppNavbar() {
    const cart = useSelector(state => state.cart);
    return (<Navbar expand="lg" fixed='top' className="bg-body-tertiary">
        <Container>
            <img
                src="https://media.istockphoto.com/id/1250795409/photo/shopping-cart-symbol-drawn-by-purple-neon-light-on-black-wall.jpg?s=612x612&w=0&k=20&c=ZRpC2hWBKYbXcgjGbHrWwfE_nCMHK7Us6gt3CuFq_Lc="
                alt="Logo"
                className='navbar-brand'
                style={{ width: '40px', height: 'auto', marginRight: '10px' }}
            />            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className='nav-link'>Products</Link>
                    <Link to="cart" className='nav-link'>Cart - {cart.length}</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}

export default AppNavbar;

