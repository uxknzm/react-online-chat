import React, { useContext } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material'
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';

const NavBar = () => {
    const logOut = () => {
        getAuth().signOut(auth)
    }
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant={'dense'}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CHAT
                    </Typography>
                    <Grid container justifyContent={'flex-end'}>
                        {user ?
                            <Button onClick={logOut} color="inherit">Logout</Button>
                            :
                                <Button color="inherit">Login</Button>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;