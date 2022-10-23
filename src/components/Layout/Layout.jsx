import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Box } from 'theme-ui';

export const Layout = () => {
  return (
    <Box p={4}>
      <AppBar />
      <Outlet />
    </Box>
  );
};
