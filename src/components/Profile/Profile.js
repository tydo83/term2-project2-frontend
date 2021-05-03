import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'
import axios from 'axios'
import { createBrowserHistory } from 'history'

import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Button,
    Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: 350,
        },
    },
}))

let history = createBrowserHistory();

function Profile(props) {
    const classes = useStyles();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    async function handleOnSubmit(e) {
        e.preventDefault()
        try {
            let getJwtToken = localStorage.getItem("jwtToken")
            let decodedJwtToken = jwtDecode(getJwtToken)
            console.log(decodedJwtToken)
            let success = await axios.put(
                "http://localhost:3001/users/update-password",
                {
                    userName: decodedJwtToken.username,
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                },
                {
                    headers: {authorization: `Bearer ${getJwtToken}`}
                }
            )
            props.history.push('/login')
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    useEffect(() => {
        setIsButtonDisabled(false)
    }, [])

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
                    <FormControl>
                        <InputLabel htmlFor="component-password">Password</InputLabel>
                        <Input
                            type="password"
                            id="component-oldPassword"
                            name="oldPassword"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        <FormHelperText id="component-error-text">
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel htmlFor="component-newPassword">New Password</InputLabel>
                        <Input
                            type="password"
                            id="component-newPassword"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
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