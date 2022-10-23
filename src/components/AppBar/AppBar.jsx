import { RiHome8Line, RiVideoLine } from 'react-icons/ri';
import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home', icon: RiHome8Line },
  { href: 'movies', text: 'Movies', icon: RiVideoLine },
];

export const AppBar = () => {
  return (
    <Box as="header">
      <Box as="nav" display='flex' pb={7}>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem key={href} to={href}>
            <Icon size="26" />
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
