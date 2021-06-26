import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import Header from './Header'
import Bestenliste from './Bestenliste'
import Start from './Start'
import Room from './Room'
import ProtectedRoute from './ProtectedRoute'
import Winner from './Winner'

import './App.css'

export class App extends Component {

    constructor(props) {
        super(props)
        this.handleNeuesSpiel = this.handleNeuesSpiel.bind(this)
        this.handleSpielBeenden = this.handleSpielBeenden.bind(this)
        this.handleBestenliste = this.handleBestenliste.bind(this)
        this.onChangeSpielerName = this.onChangeSpielerName.bind(this)
        this.handleSpielStart = this.handleSpielStart.bind(this)
        this.handleStatusSchatz = this.handleStatusSchatz.bind(this)
        this.handleStatusAusgang = this.handleStatusAusgang.bind(this)
        this.handleStep = this.handleStep.bind(this)
        this.addBestenListe = this.addBestenListe.bind(this)
        this.state = {
            bestenliste:[],
            bewegungen:0,
            gameStarted:false,
            statusSchatz:false,
            statusAusgang:false,
            spielername:'',
            spielernameExists:false
        }
    }

    handleNeuesSpiel() {
        this.setState({
            spielername:'',
            bewegungen:0,
            gameStarted:false,
            statusSchatz:false,
            statusAusgang:false,
            spielernameExists:false
        })
        this.props.history.push('/')
    }

    handleSpielBeenden() {
        let plusPunkte = 0
        if (!this.state.statusSchatz) {
            plusPunkte = plusPunkte + 10
        }
        if (!this.state.statusAusgang) {
            plusPunkte = plusPunkte + 10
        }
        
        this.addBestenListe(plusPunkte)
    }
    
    handleBestenliste() {
        this.props.history.push('/bestenliste')
    }

    onChangeSpielerName(event) {
        let tempSpielernameExists = false
        if (this.state.bestenliste.find(platz => platz.name === event.target.value)) {
            tempSpielernameExists = true
        }
        this.setState({
            spielername:event.target.value,
            spielernameExists:tempSpielernameExists
        })
    }

    handleSpielStart(event) {
        event.preventDefault()

        this.setState({
            gameStarted:true
        })
        this.props.history.push(`/room/${1}`)
    }

    handleStatusSchatz() {
        this.setState({
            statusSchatz:true
        })
    }

    handleStatusAusgang() {
        this.setState({
            statusAusgang:true
        })
    }

    handleStep() {
        this.setState((prevState) => ({
            bewegungen:prevState.bewegungen + 1
        }))
    }

    addBestenListe(plusPunkte) {
        this.setState((prevState) => ({
            bestenliste: prevState.bestenliste.concat({
                name: prevState.spielername,
                steps: prevState.bewegungen + plusPunkte
            }),
            spielername:'',
            bewegungen:0,
            gameStarted:false,
            statusSchatz:false,
            statusAusgang:false,
            spielernameExists:false
        }))
        this.handleBestenliste()
    }

    render() {

        const {bestenliste,bewegungen,gameStarted,statusSchatz,statusAusgang,spielername,spielernameExists} = this.state

        return (
            <Container>
                <Header anzahlBestenliste={bestenliste.length} bewegungen={bewegungen} gameStarted={gameStarted} statusSchatz={statusSchatz} statusAusgang={statusAusgang} handleNeuesSpiel={this.handleNeuesSpiel} handleSpielBeenden={this.handleSpielBeenden} handleBestenliste={this.handleBestenliste}/>
                <div className='outterContent'>
                    <Switch>
                        <Route exact path="/bestenliste">
                            <Bestenliste bestenliste={bestenliste}/>
                        </Route>
                        <Route exact path="/room/:roomId">
                            <Room spielername={spielername} handleStatusSchatz={this.handleStatusSchatz} handleStatusAusgang={this.handleStatusAusgang} statusSchatz={statusSchatz} statusAusgang={statusAusgang} handleStep={this.handleStep}/>
                        </Route>
                        <ProtectedRoute exact path="/winner" statusSchatz={statusSchatz} statusAusgang={statusAusgang} component={Winner} spielername={spielername} addBestenListe={this.addBestenListe} />
                        <Route exact path="/">
                            <div className='innerContent'>
                                <Start spielername={spielername} onChangeSpielerName={this.onChangeSpielerName} handleSpielStart={this.handleSpielStart} spielernameExists={spielernameExists}/>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Container>
        )
    }
}

export default withRouter(App)
