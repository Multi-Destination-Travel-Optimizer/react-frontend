import React from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LandingFormInput = () => {
    return(
        <Container>
        <Row>
            <Col>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            Location
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
            </Col>
            <Col>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            Dates
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
            </Col>
        </Row>
    </Container>
    );
}

export default LandingFormInput;