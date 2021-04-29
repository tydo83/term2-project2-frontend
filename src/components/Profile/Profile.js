import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Button,
    Grid,
} from "@material-ui/core";

import usePasswordHooks from '../hooks/usePasswordHooks'

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: 350,
        },
    },
}))

function Profile() {
    const classes = useStyles();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const [
        password,
        setPassword,
        passwordError,
        errorPasswordMessage,
        handlePasswordOnBlur
    ] = usePasswordHooks()

    async function handleOnSubmit(e) {
        e.preventDefault()
    }

    let lengthChecker = password.length > 0

    let errChecker = passwordError

    useEffect(() => {
        if (lengthChecker && !errChecker) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }

    }, [password])

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
                    <FormControl>
                        <InputLabel htmlFor="component-newPassword">New Password</InputLabel>
                        <Input
                            type="password"
                            id="component-newPassword"
                            name="newPassword"
                        />
                    </FormControl>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isButtonDisabled}
                    >Change Password</Button>
                </form>
            </Grid>
        </Grid>
    )

}

export default Profile