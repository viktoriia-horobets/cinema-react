import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes, BrowserRouter, Switch, Link  } from "react-router-dom";

export default class Header extends Component {
    render() {
        return(
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/">
                                <div className='brand-name'>IMAX</div>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link className='movies' to="/movies">Home</Link>
                                    <Link className='calendar' to="/calendar">Calendar</Link>
                                    <Link className='calendar' to="/listMovies">Movies</Link>
                                </Nav>
                            </Navbar.Collapse>

                            <Nav>
                                <Nav.Link href="#about">About us</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>                    
                </div>
                
        )
    }
}