import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
    return(
        <Navbar className="navBar">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav 
                    className="me-auto"
                    defaultActiveKey="/"
                >
                    <Nav.Link href="/main">Main</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;