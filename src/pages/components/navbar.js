import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Menu() {
    return (
        <Container>
            <Navbar expand="sm" bg="dark" data-bs-theme="dark" className="ps-3 border border-2 border-danger border rounded-2 ">
                <Navbar.Brand href="/">6v</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}