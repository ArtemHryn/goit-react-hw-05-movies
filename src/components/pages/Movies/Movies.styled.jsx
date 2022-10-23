import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesList = styled.ul`
  list-style: none;
`;

export const MovieItem = styled.li`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const NavItem = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: ${p => p.theme.colors.movies};
  :not(:last-child) {
    margin-left: 10px;
    padding-bottom: 10px;
  }
  :hover {
    color: ${p => p.theme.colors.moviesHover};
  }
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.title};
  text-align: center;
  margin-bottom: ${p => p.theme.space[7]}px;
`;
