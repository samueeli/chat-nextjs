import { Chat, MoreVert, Search } from '@mui/icons-material';
import { Avatar, Button, Icon, IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconContainer>
          <IconButton>
            <Chat />
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

      <SidebarButton>Start a new chat</SidebarButton>

      {/* list of conversations */}
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
