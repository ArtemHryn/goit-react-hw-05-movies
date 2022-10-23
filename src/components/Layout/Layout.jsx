import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'theme-ui';
import MyLoader from 'components/Loader';

export const Layout = () => {
  return (
    <Box p={4}>
      <AppBar />
      <Suspense fallback={<MyLoader/>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
