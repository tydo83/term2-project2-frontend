import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Button,
    CircularProgress,
    Snackbar,
    Grid,
} from "@material-ui/core";

import MuiAlert from '@material-ui/lab/Alert'

import useInputHooks from '../hooks/useInputHooks'
import useEmailHooks from '../hooks/useEmailHooks'
import usePasswordHooks from '../hooks/usePasswordHooks'
import { CollectionsBookmark } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: 350,
        },
    },
}))

function Signup() {
    const classes = useStyles();

    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    // const [email, setEmail] = useState("")
    // const [username, setUsername] = useState("")
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [password, setPassword] = useState("")

    const [email, setEmail, inputEmailError, errorEmailMessage, isEmailOnBlur, handleEmailOnBlur] = useEmailHooks()

    const [
        username, 
        setUsername, 
        inputUserNameError, 
        errorUserNameMessage,
        isInputOnBlur, 
        handleInputOnBlur
    ] = useInputHooks()

    const [firstName, setFirstName, inputFirstNameError, errorFirstNameMessage, isFirstNameOnBlur, handleFirstNameOnBlur] = useInputHooks()
    const [lastName, setLastName, inputLastNameError, errorLastNameMessage,  isLastNameOnBlur, handleLastNameOnBlur] = useInputHooks()

    const [password, setPassword, passwordError, errorPasswordMessage, isPasswordOnBlur, handlePasswordOnBlur] = usePasswordHooks()

    function handleOnSubmit(e) {
        e.preventDefault()
        console.log(username)
        console.log(email)
        console.log(firstName)
        console.log(lastName)
        console.log(password)
    }

    //without onBlurVersion 
    // let lengthChecker = email.length > 0 && username.length > 0 && firstName.length> 0 && 
    //                     lastName.length > 0 && password.length > 0

    // let errChecker = inputEmailError 
    //                 || inputUserNameError || inputFirstNameError 
    //                 || inputLastNameError || passwordError

    // useEffect(() => {
    //     if( lengthChecker && !errChecker) {
    //         setIsButtonDisabled(false)
    //     } else {
    //         setIsButtonDisabled(true)
    //     }
    // }, [email, username, firstName, lastName, password])

    //onBlur version
    useEffect(() => {
        if(!(isEmailOnBlur && isInputOnBlur && isFirstNameOnBlur && isLastNameOnBlur && isPasswordOnBlur)) {
            return;
        } 

        if( inputEmailError === false && 
            inputUserNameError === false && 
            inputFirstNameError === false&& 
            inputLastNameError === false&& 
            passwordError === false) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    }, [email, username, firstName, lastName, password])

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
                    <FormControl error={inputEmailError}>
                        <InputLabel htmlFor="component-email">Email</InputLabel>
                        <Input
                            id="component-email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e)}
                            onBlur={() => handleEmailOnBlur()}
                        />
                        <FormHelperText id="component-error-text">
                            {inputEmailError && errorEmailMessage}
                        </FormHelperText>
                        </FormControl>
                    <br />
                    <FormControl error={inputUserNameError}>
                        <InputLabel htmlFor="component-username">Username</InputLabel>
                        <Input
                            id="component-username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e)}
                            onBlur={() => handleInputOnBlur()}
                        />
                        <FormHelperText id="component-error-text">
                            {inputUserNameError && errorUserNameMessage}
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FormControl error={inputFirstNameError}>
                        <InputLabel htmlFor="component-firstName">First Name</InputLabel>
                        <Input
                            id="component-firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e)}
                            onBlur={() => handleFirstNameOnBlur()}
                        />
                        <FormHelperText id="component-error-text">
                            {inputFirstNameError && errorFirstNameMessage}
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FormControl error={inputLastNameError}>
                        <InputLabel htmlFor="component-lastName">Last Name</InputLabel>
                        <Input
                            id="component-lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e)}
                            onBlur={() => handleLastNameOnBlur()}
                        />
                        <FormHelperText id="component-error-text">
                            {inputLastNameError && errorLastNameMessage}
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
                            onBlur={() => handlePasswordOnBlur()}
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

export default Signup