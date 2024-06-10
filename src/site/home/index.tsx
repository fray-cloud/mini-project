import { Container } from "react-bootstrap";
import SidoList from "./sidoList";
import { Col, Row } from "react-bootstrap";
import VerticalExtraContentStepper from "./exampleBox";

const Home = () => {
    return(
        <>
            <Container className="fluid mt-5">
                <Row md={2}>
                    <Col>
                    <SidoList/>
                    </Col>
                    <Row>
                        <VerticalExtraContentStepper/>
                    </Row>
                    
                </Row>
                
                
            </Container>
        </>
    )
}

export default Home;