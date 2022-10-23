import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  font-size: 24px;
  :not(:last-child) {
    margin-left: 10px;
    padding-bottom: 10px;
  }
`;
