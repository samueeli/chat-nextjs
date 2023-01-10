import { ChatBubbleOutlineRounded } from '@mui/icons-material';
import React from 'react';

export const Loading = () => {
  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <div style={{ fontSize: '8rem', textAlign: 'center' }}>
        <ChatBubbleOutlineRounded fontSize="inherit" />
        <p style={{ fontSize: '2rem' }}>Loading...</p>
      </div>
    </div>
  );
};
