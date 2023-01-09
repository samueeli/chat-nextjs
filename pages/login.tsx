import { ChatBubbleOutlineRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

export const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>ChatNext - Login</title>
      </Head>
      <LoginContainer>
        <ChatBubbleOutlineRounded fontSize="inherit" />
        <Button onClick={signIn} color="inherit" variant="outlined">
          Sign In With Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 8rem;
  padding: 100px;
  background-color: white;
  border-radius: 15px;
`;
