import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
    return(
        <Navbar collapseOnSelect className="navBar" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarScroll">
                <Nav 
                    className="me-auto"
                    defaultActiveKey="/"
                >
                    <Nav.Link href="/main">Main</Nav.Link>
                    <Nav.Link href="#">Main2</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;