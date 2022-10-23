import { getTrendingMovies } from 'components/services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from 'theme-ui';
import { NavItem } from './Home.styled';

export const Home = () => {
  const location = useLocation()
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    async function downloadTrending() {
      try {
        const trending = await getTrendingMovies();
        setTrending(trending);
      } catch {
        console.log('Oops');
      }
    }
    downloadTrending();
  }, []);
  return (
    <Box>
      <h1>Trending Today</h1>
      {trending.map(({ id, original_title }) => (
        <NavItem key={id} to={`movies/${id}`} state={{home: location}}>
          {original_title}
        </NavItem>
      ))}
    </Box>
  );
};
