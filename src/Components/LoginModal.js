import React, { Component } from "react";
import {Button, Modal, Container, Row} from "react-bootstrap";

class LoginModal extends Component {

    render() {
        return (
            <Modal show={this.props.show}>
                <div style={{padding:"40px"}}>
                    <h2>Athena Consultancy - Login form</h2>
                    <form>
                        <Container>
                            <Row style={{margin:"20px 0px 20px 0px", display:"inline-block", fontWeight:700}}>
                                <label for="login">Login</label><br/>
                                <input type="text" placeholder="Login de Usuário" name="login" required></input>
                            </Row>
                            <hr></hr>
                            <Row style={{margin:"10px 0px 20px 0px", display:"inline-block", fontWeight:700}}>
                                <label for="senha">Senha</label><br/>
                                <input type="password" placeholder="Senha de Usuário" name="senha" required></input>
                            </Row>
                            <Row style={{margin:"20px 0px 0px 0px"}}>
                                <Button style={{marginRight:"10px"}} type="submit" variant="success">Login</Button>
                                <Button style={{marginLeft:"10px"}} variant="danger" onClick={this.props.closeModal}>Cancel</Button>
                            </Row>
                            <p>Se você ainda não possui uma conta, <span onClick={this.props.signinModal} style={{color:"blue", cursor:"pointer"}}>clique aqui</span></p>
                        </Container>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default LoginModal;