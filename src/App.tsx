import React from 'react';
import styled from '@emotion/styled';

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.colorBlue};
  text-align: center;
`;

function App() {
  return (
    <div className='App'>
      <StyledTitle>Design System Study🎨</StyledTitle>
    </div>
  );
}

export default App;
