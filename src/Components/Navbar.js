import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

class AthenaNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: false,
            signin: false
        }
        this.acessclick = this.acessclick.bind(this)
    }

    acessclick() {
        this.setState((state) => {
            return {login: !this.state.login}
        })
    }

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Athena Consultancy</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button variant="outline-light" onClick={this.acessclick()} >Access</Button>
            </Navbar>
        )
    }
}

export default AthenaNavbar;