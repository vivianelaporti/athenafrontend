import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Content extends Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10}>
                        {this.props.content}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Content;