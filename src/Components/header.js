import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes, Router, Switch, Link  } from "react-router-dom";
import Movies from "./movies";
import Calendar from "./calendar";

export default class Header extends Component {
    render() {
        return(
            
                <div>

                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="/home">
                                <div className='brand-name'>IMAX</div>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link className='movies' to="/movies">Movies</Link>
                                    <Link className='calendar' to="/calendar">Calendar</Link>
                                </Nav>
                            </Navbar.Collapse>

                            <Nav>
                                <Nav.Link href="#about">About us</Nav.Link>
                            </Nav>

                        </Container>
                    </Navbar>
                
                   
                        <Routes>
                            <Route path="movies" element={<Movies/>}></Route>
                            <Route path="calendar" element={<Calendar/>}></Route>
                        </Routes>
                    
                </div>
                
        )
    }
}