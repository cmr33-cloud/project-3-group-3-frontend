import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
export default function CustomNav() {
    return (
        <Navbar className='custom-nav'>
            <Container>
                <Navbar.Brand >
                    <Container className = 'd-flex flex-row align-items-center justify-content-center'>
                    <h2 className = 'custom-nav-text'>InQUIZitive</h2>
                    <br/>
                    <p className = 'custom-nav-text'>let's get QUIZicle</p>
                    </Container>
                    </Navbar.Brand>
                
            </Container>
        </Navbar>
    )
}
