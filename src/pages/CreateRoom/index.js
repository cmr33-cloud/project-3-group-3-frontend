import React from 'react'
import '../../styles/createRoom.css'
import { Col, Container, Row } from 'react-bootstrap'

const CreateRoom = () => {
    return (
        <div className='d-flex align-items-center'>
            <Container>
                <Container className= 'customBox border border-dark'>
                    <Row>
                        <Col className="box border border-dark">1</Col>
                        <Col className="box border border-dark">2</Col>
                    </Row>
                    <Row>
                        <Col className="box border border-dark">3</Col>
                        <Col className="box border border-dark">4</Col>
                    </Row>

                </Container>
            </Container>  
        </div>
    )
}

export default CreateRoom
