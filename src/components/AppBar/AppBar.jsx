import { RiHome8Line, RiVideoLine } from 'react-icons/ri';
import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box as="header">
      <Box as="nav" display="flex" pb={7} borderBottom='normal'>
        <NavItem to="/" end>
          <RiHome8Line />
          Home
        </NavItem>
        <NavItem to="/movies">
          <RiVideoLine />
          Movies
        </NavItem>
      </Box>
    </Box>
  );
};
