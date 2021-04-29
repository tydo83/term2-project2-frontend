import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthContextComponent from './components/context/AuthContext'


const Navbar = React.lazy(() => import('./components/Navbar/Navbar'))
const Home = React.lazy(() => import('./components/Home/Home'))
const Login = React.lazy(() => import('./components/Login/Login'))
const SignUp = React.lazy(() => import('./components/Signup/Signup'))
const Footer = React.lazy(() => import('./components/Footer/Footer'))
const Features = React.lazy(() => import('./components/Features/Features'))
const Profile = React.lazy(() => import('./components/Profile/Profile'))
const Search = React.lazy(() => import('./components/Search/Search'))

function MainRouter() {
    return (
            <AuthContextComponent>
                <Navbar />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/search" component={Search} />
                    <Route path="/" component={Home} />
                </Switch>
                <Features />
                <Footer />
            </AuthContextComponent>
    )
}

export default MainRouter