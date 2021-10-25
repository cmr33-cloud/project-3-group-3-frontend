import React from 'react'
import { Container, Button } from 'react-bootstrap'

export default function Lobby() {

    function handleClick() {

    }

    return (
        <Container>
          <h1>welcome to the lobby</h1>
        {/* <Container className= 'customBox border border-dark'>
                    <Row>
                        <Col className="box border border-dark">1</Col>
                        <Col className="box border border-dark">2</Col>
                    </Row>
                    <Row>
                        <Col className="box border border-dark">3</Col>
                        <Col className="box border border-dark">4</Col>
                    </Row>

                </Container> */}
        <div className="row p-2 m-2">
          <div className="col options-box card" id='chat'>chat</div>
          <div className="col options-box card" id='waiting-room'>waiting room</div>
        </div>
        <div className="row p-2 m-2">
          <div className="col">
              <Button  id='invite'>Invite</Button>
          </div>
          <div className="col" id='start-game'>
          <Button  id='start-game'>start game</Button>
          </div>
        </div>
        
      </Container>
    )
}
