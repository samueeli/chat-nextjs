import { doc, getDocs, query } from 'firebase/firestore';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { ChatScreen } from '../../components/ChatScreen';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { db } from '../../firebase';

const ChatPage = () => {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
};

export default ChatPage;

// @TODO: So this below will not work. We need to update the code to v9

// export const getServerSideProps = async (context: any) => {
//   const ref = doc(db, 'chats', context.query.id);

//   // Prep the message on the server side
//   const messagesRes = await ref
//     .collection('messages')
//     .orderBy('timestamp', 'asc')
//     .get();

//   const messages = messagesRes.docs
//     .map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }))
//     .map((messages) => ({
//       ...messages,
//       timestamp: messages.timestamp.toDate().toTime(),
//     }));

//   // prep chats
//   const chatRes = await ref.get();
//   const chat = {
//     id: chatRes.id,
//     ...chatRes.data(),
//   };

//   console.log(chat, messages);

//   return {
//     props: {
//       messages: JSON.stringify(messages),
//       chat,
//     },
// };

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
`;
