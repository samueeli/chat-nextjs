import { Chat as ChatIcon, MoreVert, Search } from '@mui/icons-material';
import { Avatar, Button, Icon, IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import * as EmailValidator from 'email-validator';
import { signOut } from 'firebase/auth';
import { collection, addDoc, query, where } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Chat } from '../Chat';

export const Sidebar = () => {
  const [user] = useAuthState(auth);

  const userChatRef = query(
    collection(db, 'chats'),
    where('users', 'array-contains', user?.email)
  );

  const [chatsSnapshot] = useCollection(userChatRef);

  const chatAlreadyExists = (recipientEmail: string) => {
    return !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user: any) => user === recipientEmail)?.length >
        0
    );
  };

  const createChat = async () => {
    const input = prompt(
      'Enter the email address for the user you want to chat with'
    );

    if (!input) return;

    if (chatAlreadyExists(input)) {
      // Actually you want to open the existing chat
      return;
    } else if (EmailValidator.validate(input) && input !== user?.email) {
      try {
        await addDoc(collection(db, 'chats'), {
          users: [user?.email, input],
        });

        console.log('Added a chat');
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Email is not valid.');
    }
  };

  const userLogout = () => {
    signOut(auth);
  };

  return (
    <Container>
      <Header>
        <UserAvatar src={`${user?.photoURL}`} onClick={userLogout} />

        <IconContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </IconContainer>
      </Header>

      <SearchContainer>
        <Search />
        <SearchInput placeholder="Search chats" />
      </SearchContainer>

      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {/* list of conversations */}
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  z-index: 1;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconContainer = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline-width: 0;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  color: black;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
