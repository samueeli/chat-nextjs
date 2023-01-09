import { Chat, MoreVert } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconContainer>
          <Chat />
          <MoreVert />
        </IconContainer>
      </Header>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)`
  margin: 10px;
`;

const IconContainer = styled.div``;
