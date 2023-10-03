import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

// Styled components for custom styling
const HeaderWrapper = styled.header`
  background-color: #1976d2; /* Example background color */
  padding: 16px;
  text-align: center;
`;

const AppName = styled(Typography)`
  && {
    font-size: 24px;
    color: white; /* Text color */
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <AppName variant="h1">My Flashcard App</AppName>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
