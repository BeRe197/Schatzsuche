import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export class Start extends Component {
    render() {

        const {spielername, spielernameExists, onChangeSpielerName, handleSpielStart} = this.props

        return (
            <div className='start'>
                <h1>Die Schatzsuche</h1>
                <p>Suche in den Räumen den Schatz und finde den Exit im Labyrinth.<br />
                Versuche so wenig wie möglich Bewegungen zu machen.</p>
                <Form onSubmit={handleSpielStart}>
                    <Form.Control isInvalid={spielernameExists} value={spielername} onChange={onChangeSpielerName} className='spielername' type="inout" placeholder="Spielername" />
                    <Form.Control.Feedback type='invalid'>
                        Spielername bereits vergeben. Bitte wähle einen anderen Namen!
                    </Form.Control.Feedback>
                    <Button variant="info" type='Submit' style={{marginTop: '15px'}} disabled={spielername.length === 0 || spielernameExists}>START</Button>
                </Form>
            </div>
        )
    }
}

Start.propTypes = {
    spielername:PropTypes.string.isRequired,
    onChangeSpielerName:PropTypes.func.isRequired,
    handleSpielStart:PropTypes.func.isRequired,
    spielernameExists:PropTypes.bool.isRequired
}

export default Start
