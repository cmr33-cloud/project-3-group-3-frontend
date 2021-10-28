import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
export default function CustomNav() {
    return (
        <Navbar className='custom-nav'>
            <Container>
                <Navbar.Brand >
                    <Container className = 'd-flex flex-row align-items-center justify-content-center'>
                    <h2 className = 'custom-nav-text'>Inquizitive</h2>
                    <br/>
                    <p className = 'custom-nav-text'>the more you know, the more you grow</p>
                    </Container>
                    </Navbar.Brand>
                
            </Container>
        </Navbar>
    )
}
