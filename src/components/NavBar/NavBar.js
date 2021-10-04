import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark" style={{ backgroundColor: "rgb(1, 1, 31)" }} >
                <Container>
                    <Navbar.Brand style={{ color: "black", fontWeight: "bold" }} >SMR Legal Courses</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Stack direction="horizontal" gap={3}>
                            <NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                About us
                            </NavLink>

                            <NavLink
                                to="/courses"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Courses
                            </NavLink>

                            <NavLink
                                to="/litigation"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "black"
                                }}
                            >
                                Litigation
                            </NavLink>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;