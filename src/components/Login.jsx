import { Box, Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '..';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new GoogleAuthProvider()
        const {user} = await signInWithPopup(auth, provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight }}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid 
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    <Box p={5}>
                        <Button onClick={login}>Войти с помошью google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;