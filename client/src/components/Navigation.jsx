import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Home from '../pages/Home'
import AddMovie from '../pages/AddMovie'
import Favourites from '../pages/Favourites'
import Register from '../pages/Register'
import Movies from '../pages/Movies'


export default function NavigationBar() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                            <Nav.Link as={Link} to="/addmovie">Add movie</Nav.Link>
                            <Nav.Link as={Link} to="/favourites">Favourite movies</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}