import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import LoginModal from "./LoginModal";
import SigninModal from "./SigninModal";

class AthenaNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: false,
            signin: false
        };
        this.loginclick = this.loginclick.bind(this);
        this.signinclick = this.signinclick.bind(this);
        this.closemodal = this.closemodal.bind(this);
    }

    loginclick() {
        this.setState((state) => ({
            login: true,
            signin: false
        }));
    }

    signinclick() {
        this.setState((state) => ({
            login: false,
            signin: true
        }));
    }

    closemodal() {
        this.setState((state) => ({
            login: false,
            signin: false
        }));
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
                <Button variant="outline-light" onClick={this.loginclick} >Access</Button>
                <LoginModal show={this.state.login} closeModal={this.closemodal} signinModal={this.signinclick} />
                <SigninModal show={this.state.signin} closeModal={this.closemodal} loginModal={this.loginclick} />
            </Navbar>
        )
    }
}

export default AthenaNavbar;