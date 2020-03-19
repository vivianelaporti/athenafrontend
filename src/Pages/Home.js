import React, { Component } from "react";
// import { Button } from "react-bootstrap"
import AthenaNavbar from "../Components/Navbar";
import Content from "../Components/Content"


class HomePage extends Component {

    render() {
        let firsthomecontent = <div>
            <h1>Hello, World!</h1>
            <h2>Testando</h2>
        </div>;
        return (
            <div>
                <AthenaNavbar/>
                <br/>
                <Content content={firsthomecontent}/>
            </div>
        )
    }
}

export default HomePage;