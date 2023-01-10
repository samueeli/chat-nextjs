import { Avatar } from '@mui/material';
import { collection, query, where } from 'firebase/firestore';
import Router from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import getRecipientEmail from '../utils/getRecipientEmail';

export const Chat = ({ id, users }: any) => {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  const [recipientSnapshot] = useCollection(
    query(
      collection(db, 'users'),
      where('email', '==', getRecipientEmail(users, user))
    )
  );

  const enterChat = () => {
    Router.push(`/chat/${id}`);
  };

  return (
    <Container onClick={enterChat}>
      <UserAvatar>{recipientEmail[0].toUpperCase()}</UserAvatar>
      <p>{recipientEmail}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-all;

  :hover {
    background-color: whitesmoke;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
