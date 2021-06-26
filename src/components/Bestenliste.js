import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Table from 'react-bootstrap/Table'

export class Bestenliste extends Component {

    render() {

        const {bestenliste} = this.props
        
        if (bestenliste.length === 0) {
            return <Redirect to='/'/> 
        }

        return (
            <div>
                <br />
                <h2>Bestenliste</h2>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Platz</th>
                            <th>Spielername</th>
                            <th>Bewegungen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bestenliste.sort((a,b) => a.steps - b.steps).map((platz,index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{platz.name}</td>
                                    <td>{platz.steps}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

Bestenliste.propTypes = {
    bestenliste:PropTypes.array.isRequired
}

export default Bestenliste
