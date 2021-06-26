import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import {BiRectangle, BiRightArrowCircle, BiLeftArrowCircle, BiDownArrowCircle, BiUpArrowCircle} from 'react-icons/bi'
import {GiDoor, GiExitDoor} from 'react-icons/gi'

import {getAllRooms} from '../api/Api'

import Gold from '../images/gold.jpg'

export class Room extends Component {

    constructor(props) {
        super(props)
        this.nextRoom = this.nextRoom.bind(this)
        this.getRoom = this.getRoom.bind(this)
        this.state = {
            room:{}
        }
    }

    componentDidMount() {
        if (this.props.spielername !== ''){
            this.getRoom()
        } else {
            this.props.history.push(`/`)
        }
        
    }

    componentDidUpdate() {
        this.getRoom()
    }

    getRoom() {
        //API
        let apiRooms = getAllRooms();
        apiRooms.then(data => {
            let roomDataArray = Object.values(data.rooms)
            this.setState({
                room:roomDataArray[0][this.props.match.params.roomId]
            })
        })
        if(this.state.room.treasure === 1 && !this.props.statusSchatz) {
            this.props.handleStatusSchatz()
        }
        if(this.state.room.exit === 1 && !this.props.statusAusgang) {
            this.props.handleStatusAusgang()
        }
    }

    nextRoom(roomId) {
        this.props.handleStep()
        this.props.history.push(`/room/${roomId}`)
    }

    render() {

        const {statusSchatz, statusAusgang} = this.props

        if (statusSchatz && statusAusgang) {
            return <Redirect to='/winner'/> 
        }

        return (
            <>
                {
                    Object.keys(this.state.room).length === 0 ?
                    <Spinner className='spinner' animation="border" />
                    :
                    <div className='room'>
                        {
                            this.state.room.up !== 0 ?
                            <button className='upArrow' onClick={() => (this.nextRoom(this.state.room.up))}>
                                <GiDoor size={80} className='width100'/>
                                <BiUpArrowCircle size={80} color={'green'} className='width100'/>
                            </button>
                            : ''
                        }
                        {
                            this.state.room.right !== 0 ?
                            <button className='rightArrow' onClick={() => (this.nextRoom(this.state.room.right))}>
                                <BiRightArrowCircle size={80} color={'green'}/>
                                <GiDoor size={80}/>
                            </button>
                            : ''
                        }
                        {
                            this.state.room.down !== 0 ?
                            <button className='downArrow' onClick={() => (this.nextRoom(this.state.room.down))}>
                                <BiDownArrowCircle size={80} color={'green'} className='width100'/>
                                <GiDoor size={80} className='width100'/>
                            </button>
                            : ''
                        }
                        {
                            this.state.room.left !== 0 ?
                            <button className='leftArrow' onClick={() => (this.nextRoom(this.state.room.left))}>
                                <GiDoor size={80}/>
                                <BiLeftArrowCircle size={80} color={'green'}/>
                            </button>
                            : ''
                        }
                        {this.state.room.treasure === 0 && this.state.room.exit === 0 ?
                        <Card className='roomCard'>
                            <Card.Body className='roomCardBody'> <BiRectangle/> {this.state.room.name}</Card.Body>
                        </Card>
                        :
                        this.state.room.exit === 1 ?
                        <Card className='roomCardGold'>
                            <GiExitDoor size={120} className='exitIcon'/>
                            <Card.Body className='roomCardGoldBody'>{this.state.room.name}</Card.Body>
                        </Card>
                        :
                        <Card className='roomCardGold'>
                            <img alt='Gold' src={Gold} className='goldIMG' />
                            <Card.Body className='roomCardGoldBody'>{this.state.room.name}</Card.Body>
                        </Card>
                        }
                    </div>
                }
            </>
        )
    }
}

Room.propTypes = {
    statusSchatz:PropTypes.bool.isRequired,
    statusAusgang:PropTypes.bool.isRequired,
    spielername:PropTypes.string.isRequired,
    handleStatusSchatz:PropTypes.func.isRequired,
    handleStatusAusgang:PropTypes.func.isRequired,
    handleStep:PropTypes.func.isRequired
}

export default withRouter(Room)
