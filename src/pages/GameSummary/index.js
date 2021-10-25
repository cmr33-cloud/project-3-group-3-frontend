import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../styles/gameSummary.css'

const GameSummary = () => {
    return (
        <div className="d-flex justify-content-center">
            <Container classname="d-flex">
                <Row className="customBox border">
                    <Col className="box border">Leaderboard</Col>
                    <Col className="box border">Game Stats</Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default GameSummary
