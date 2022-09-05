import React from 'react';
import {Container, Grid, CircularProgress} from '@mui/material'

const Loader = () => {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid 
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    <CircularProgress />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;