import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

import {GiCrosshair} from 'react-icons/gi'
import {BiWalk} from 'react-icons/bi'

export class Header extends Component {
    render() {

        const {anzahlBestenliste, bewegungen, gameStarted, statusSchatz, statusAusgang, handleNeuesSpiel, handleSpielBeenden, handleBestenliste} = this.props

        return (
            <Container className='header'>
                <Row>
                    <Col>
                        {!gameStarted ?
                            <Button variant="danger" className='headerBtn' onClick={handleNeuesSpiel}>NEUES SPIEL</Button> :
                            <Button variant="danger" className='headerBtn' onClick={handleSpielBeenden}>SPIEL BEENDEN</Button>
                        }
                        <Button variant="primary" className='headerBtn' onClick={handleBestenliste} disabled={anzahlBestenliste === 0}>BESTENLISTE ({anzahlBestenliste})</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className='headerCol' xs={12} md={8} lg={8}>
                        <Card className='headerCard'>
                            <Card.Body>
                                <h2><GiCrosshair /> Ziele im Labyrinth</h2>
                                <Form className='chckBoxArea'>
                                    <Form.Check 
                                        type='checkbox'
                                        id='ChckBx_Schatz'
                                        label='Finde den Schatz*'
                                        disabled
                                        className='chckBox'
                                        checked={statusSchatz}
                                    />
                                    <Form.Check 
                                        type='checkbox'
                                        id='ChckBx_Ausgang'
                                        label='Finde den Ausgang*'
                                        disabled
                                        className='chckBox'
                                        checked={statusAusgang}
                                    />
                                </Form>
                                <p>*INFO: werden die Ziele nicht gefunden, gibt es pro Ziel +10 Bewegungspunkte Strafe beim vorzeitigen Beenden des Spiels!</p> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='headerCol' xs={12} md={4} lg={4}>
                        <Card className='headerCard' style={{textAlign: 'center'}}>
                            <Card.Body>
                                <h2><BiWalk /> Bewegungen</h2>
                                <p className='counter'>{bewegungen}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

Header.propTypes = {
    anzahlBestenliste:PropTypes.number.isRequired,
    bewegungen:PropTypes.number.isRequired,
    gameStarted:PropTypes.bool.isRequired,
    statusSchatz:PropTypes.bool.isRequired,
    statusAusgang:PropTypes.bool.isRequired,
    handleNeuesSpiel:PropTypes.func.isRequired,
    handleSpielBeenden:PropTypes.func.isRequired,
    handleBestenliste:PropTypes.func.isRequired
}

export default Header
