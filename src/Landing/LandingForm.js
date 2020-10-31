import React from "react";
import Container from "react-bootstrap/Container";
import LandingFormInput from "./LandingFormInput"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const LandingForm = () => {
    return (
        <div className="LandingForm">
            <Container>
                <h1>Optimize your travel costs</h1>
            </Container>
            <LandingFormInput/>
            <LandingFormInput/>
            <LandingFormInput/>
            <Container>
                <Row>
                    <Col lg={10} md={10}>
                    </Col>
                    <Col>
                    <Button variant="primary" size="lg" active>Search Flights</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LandingForm;
