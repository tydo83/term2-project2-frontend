import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { checkIsUserLoggedIn } from '../../lib/helpers'

const privateRoute = ({ component: Component, user, handleUserLogout, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(routerProps) =>
                checkIsUserLoggedIn() ?
                <Component {...routerProps} handleUserLogout={handleUserLogout}/>
                    :
                <Redirect to="/sign-up" />
            }
        />)
}

export default privateRoute;