import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  display: block;
  width: 55px;
  color: ${p => p.theme.colors.movies};
  text-decoration: none;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 25px;
  :hover {
    color: ${p => p.theme.colors.moviesHover};
  }
`;