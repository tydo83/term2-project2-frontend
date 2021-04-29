import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import jwtDecode from 'jwt-decode'

import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Button,
    Grid,
} from "@material-ui/core";

import useInputHooks from '../hooks/useInputHooks'
import usePasswordHooks from '../hooks/usePasswordHooks'

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: 350,
        },
    },
}))

function Login(props) {
    const classes = useStyles();

    const context = useContext(AuthContext)
    console.log(context);

    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const [
        username,
        setUsername,
        inputUserNameError,
        errorUserNameMessage,
        handleInputOnBlur
    ] = useInputHooks()

    const [
        password,
        setPassword,
        passwordError,
        errorPasswordMessage,
        handlePasswordOnBlur
    ] = usePasswordHooks()

    async function handleOnSubmit(e) {
        e.preventDefault()
        try {
            let result = await axios.post("http://localhost:3001/users/login", {
                userName: username,
                password: password,
            })
            localStorage.setItem('jwtToken', result.data.jwtToken)
            let decodedJWTToken = jwtDecode(result.data.jwtToken)
            console.log(decodedJWTToken)
            context.dispatch({ type: "SUCCESS_LOGGED_IN", user: decodedJWTToken.username})
            props.history.push('/')
            console.log(result)
        } catch(e) {
            console.log(e)
        }
    }

    // without onBlurVersion 
    let lengthChecker = username.length > 0 && password.length > 0

    let errChecker = inputUserNameError || passwordError

    useEffect(() => {
        if (lengthChecker && !errChecker) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }

    }, [username, password])

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "30vh" }}
        >
            <Grid item xs={12}>
                <form className={classes.root} autoComplete="on" onSubmit={handleOnSubmit}>
                    <FormControl error={inputUserNameError}>
                        <InputLabel htmlFor="component-username">Username</InputLabel>
                        <Input
                            id="component-username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e)}
                            // onBlur={() => handleInputOnBlur()}
                        />
                        <FormHelperText id="component-error-text">
                            {inputUserNameError && errorUserNameMessage}
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FormControl error={passwordError}>
                        <InputLabel htmlFor="component-password">Password</InputLabel>
                        <Input
                            type="password"
                            id="component-password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e)}
                            // onBlur={() => handlePasswordOnBlur()}
                        />
                        <FormHelperText id="component-error-text">
                            {passwordError && errorPasswordMessage}
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isButtonDisabled}
                    >Submit</Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Login