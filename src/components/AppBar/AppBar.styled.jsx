import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  padding: 8px;
  :not(:first-child) {
    margin-left: 110px;
  }
  &.active{
    /* background-color: tomato; */
  }
  :hover:not(.active){
    background-color: pink;
  }
`;
