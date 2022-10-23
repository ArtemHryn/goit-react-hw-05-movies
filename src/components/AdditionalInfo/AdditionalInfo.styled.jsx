import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalInfoLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid black;
  :first-child {
    margin-bottom: 10px;
  }
  &.active {
    color: white;
    background-color: blue;
  }
`;

export const AdditionInfoList = styled.ul`
  list-style: none;
`;

export const AdditionInfoItem = styled.ul`
  display: block;
`;
