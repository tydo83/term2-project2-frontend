import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'))
const Home = React.lazy(() => import('./components/Home/Home'))
const Login = React.lazy(() => import('./components/Login/Login'))
const SignUp = React.lazy(() => import('./components/Signup/Signup'))
const Footer = React.lazy(() => import('./components/Footer/Footer'))

function MainRouter() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/sign-up" component={SignUp}/>
                <Route path="/" component={Home}/>
            </Switch>
            <Footer />
        </>
    )
}

export default MainRouter