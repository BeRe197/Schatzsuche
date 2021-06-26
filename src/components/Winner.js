import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button'
import Win from '../images/win.jpg'

export class Winner extends Component {
    render() {

        const {spielername, addBestenListe} = this.props

        return (
            <div style={{height: '100%'}}>
                <img alt='Win' src={Win} className='winIMG'/>
                <div className='winner'>
                    <p>Herzlichen Glückwunsch<br />
                    {spielername}!</p>
                    <Button variant="primary" onClick={() => (addBestenListe(0))}>ZUR BESTENLISTE</Button>
                </div>
            </div>
        )
    }
}

Winner.propTypes = {
    spielername:PropTypes.string.isRequired,
    addBestenListe:PropTypes.func.isRequired
}

export default Winner
