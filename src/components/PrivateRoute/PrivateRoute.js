import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { checkIsUserLoggedIn } from '../../lib/helpers'
import { toast } from 'react-toastify';

const privateRoute = ({ component: Component, user, handleUserLogout, ...rest }) => {
    if(!checkIsUserLoggedIn()) {
        toast.error("Sorry, you have to login to use this feature", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } 
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