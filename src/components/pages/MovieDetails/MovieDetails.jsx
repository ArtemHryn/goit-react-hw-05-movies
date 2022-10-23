import { getMovieById } from 'components/services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Box } from 'theme-ui';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails(movieId) {
      const movie = await getMovieById(movieId);
      setCustomer(movie);
    }
    getMovieDetails(+movieId);
  }, [movieId]);
  if (!movie) {
    return null;
  }
  const { original_title } = movie;
  return (
    <>
      <Box>
        <Link to={location.state?.home ?? '/'}>Back</Link>
        <p>{original_title}</p>
      </Box>
      <Box>
        <h3>Additional Information</h3>
        <ul>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
        <Outlet />
      </Box>
    </>
  );
};
