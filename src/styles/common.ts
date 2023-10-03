import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const ContainerWrapper = styled(Container)`
  padding: 25px;
  text-align: center;
`;

export const ButtonWrapper = styled(Button)`
  padding: 25px;
`;

export const LinkWrapper = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
