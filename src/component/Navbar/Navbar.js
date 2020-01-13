import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            
            <Router>
                <MDBNavbar style={{ backgroundColor: "#51b972" }} dark expand="md">
                   
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="/" onClick = {() => this.props.history.push("/")}>Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/vehicles" onClick = {() => this.props.history.push("/vehicles")}>Vehicles</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/toysforboys" onClick = {() => this.props.history.push("/toysforboys")}>Toys for Boys</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/toysforgirls" onClick = {() => this.props.history.push("/toysforgirls")}>Toys For Girls</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/babytoy" onClick = {() => this.props.history.push("/babytoy")}>Baby Toys</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/newarrival" onClick = {() => this.props.history.push("/newarrival")}>New Arival</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/flashsale" onClick = {() => this.props.history.push("/flashsale")}> Flashsale  </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/winterbigsale" onClick = {() => this.props.history.push("/winterbigsale")}>Winter Big Sale</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/blog" onClick = {() => this.props.history.push("/blog")}>blog</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }
}

export default NavbarPage;