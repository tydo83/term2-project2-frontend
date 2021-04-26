import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'))
const Home = React.lazy(() => import('./components/Home/Home'))
const Login = React.lazy(() => import('./components/Login/Login'))
const SignUp = React.lazy(() => import('./components/Signup/Signup'))

function MainRouter() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route Path="/" component={Home} />
                <Route Path="/login" component={Login} />
                <Route Path="/signup" component={SignUp} />
            </Switch>
        </>
    )
}

export default MainRouter