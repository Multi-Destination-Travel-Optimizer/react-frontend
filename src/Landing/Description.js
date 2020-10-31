import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Description = () => {
    return (
        <div className="Description">
            //Write your code here
            //Go into App.css and see how the styling works for this className (Hint: .Description and .Description .Col1)
            <Container>
                <Row>
                    <Col className="Col1">
                        <p>Text 1</p>
                    </Col>
                    <Col className="Col1">
                        <p>Text 2</p>
                    </Col>
                    <Col className="Col1">
                        <p>Text 3</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Description;
