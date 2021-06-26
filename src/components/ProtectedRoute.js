import React from 'react'
import {Redirect, Route} from 'react-router-dom'

function ProtectedRoute({statusSchatz,statusAusgang,component:Component,spielername,addBestenListe,...rest}) {
    return (
        <Route {...rest} render={
            (props) => {
                if (statusSchatz && statusAusgang) {
                    return <Component spielername={spielername} addBestenListe={addBestenListe} {...props} />
                } else {
                    return <Redirect to={{
                        pathname:'/',
                        state:{from:props.location}
                    }}/>
                }
            }
        }/>
    )
}

export default ProtectedRoute
