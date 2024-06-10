import { Nav, Navbar, Container } from "react-bootstrap";
import './header.css'

const Header = () => {
    return(
        <Navbar collapseOnSelect className="navBar" bg="success" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarScroll">
                <Nav 
                    className="me-auto"
                    defaultActiveKey="/"
                >
                    <Nav.Link href="/search">조회</Nav.Link>
                    <Nav.Link href="#">즐겨찾기</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;