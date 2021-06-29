import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardComponent from "../components/UI/card.component";
const Main = () => {
    return(
        <Container className="h-100">
            <Row className="h-100 d-flex justify-content-center align-items-center">
                <Col md="auto">
                    <CardComponent/>
                </Col>
            </Row>
        </Container>
    )
}
export default Main