import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
export default function CustomNav() {
    return (
        <Navbar className='custom-nav'>
            <Container>
                <Navbar.Brand >
                    <p className = 'custom-nav-text'>
                        <b>inquizitive</b> - catchy slogan</p>
                    
                    </Navbar.Brand>
                
            </Container>
        </Navbar>
    )
}
