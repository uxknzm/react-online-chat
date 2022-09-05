import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from './Loader';
import { addDoc, collection, orderBy, query, Timestamp } from 'firebase/firestore';

const Chat = () => {
    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth)

    const [value, setValue] = useState('')

    const [messages, loading] = useCollectionData(
        query(collection(firestore, 'messages'), orderBy("createdAt", "asc"))
    )

    const docData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        text: value,
        createdAt: Timestamp.fromDate(new Date())
    }

    const sendMessage = async () => {
        addDoc(collection(firestore, 'messages'), docData)
        setValue('')
    }
    if (loading) {
        return <Loader />
    }
    return (
        <Container sx={{
            marginTop: '10px'
        }}>
            <Grid container
                justifyContent={'center'}
                >
                <div id='scroll' style={{ width: '80%', height: '60vh', overflowY: 'auto', margin: 20 }}>
                    {messages.map(message =>
                        <div key={message.createdAt} style={{
                            margin: 10,
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content'
                        }}>
                            <div style={{
                                backgroundColor: user.uid === message.uid ? '#007aff' : '#f4f4f8',
                                color: user.uid === message.uid ? 'white' : 'black',
                                borderRadius: '10px',
                                padding: 10,
                            }}>
                                <div>
                                    {message.text}</div>
                                <div style={{
                                    fontSize: 11
                                }}>{message.displayName}: {message.email}</div>
                            </div>
                        </div>
                    )}
                </div>
                <Grid container
                    style={{ width: '50%', display: 'inline' }}
                >
                    <TextField
                        size="small"
                        helperText="Enter your message"
                        variant="standard"
                        label="message"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        sx={{ mr: 2, width: '60ch' }}
                        maxRows={2}
                    />
                    <Button sx={{ mt: 1 }} onClick={sendMessage}><Avatar src={user.photoURL} /></Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;