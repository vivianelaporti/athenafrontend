import React, { Component } from "react";
import {Button, Modal} from "react-bootstrap";

class Modal extends Component {

    render() {
        return (
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>Athena Consultancy - Login</Modal.Title>
                    <Modal.Body>
                        <h1>Testando Modal!</h1>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal.Header>
            </Modal>
        )
    }
}