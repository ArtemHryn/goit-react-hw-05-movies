import { getMovieById } from 'components/services/api';
import { Suspense, useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Box } from 'components/Box';
import { BackLink } from './MovieDetails.styled';
import { MovieDesc } from '../Movies/MovieDesc/MovieDesc';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import Catalog from 'components/CastLoader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setCustomer] = useState(null);
  const location = useLocation();
  const whereIs = useRef(location);

  useEffect(() => {
    async function getMovieDetails() {
      const movie = await getMovieById(movieId);
      setCustomer(movie);
    }
    getMovieDetails();
  }, [movieId]);
  if (!movie) {
    return null;
  }

  return (
    <>
      <Box as="div" pt={50}>
        <BackLink to={whereIs.current.state?.home ?? '/'}>⬅️Back</BackLink>
        <Box display="flex" borderBottom="normal" pb={6} mt={6}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt=""
          />
          <MovieDesc movie={movie} />
        </Box>
      </Box>
      <Box>
        <AdditionalInfo />
        <Suspense fallback={<Catalog />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default MovieDetails;
