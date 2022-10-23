import { findFilms } from 'components/services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Box } from 'theme-ui';
import { MovieItem, MoviesList, NavItem, Title } from './Movies.styled';
import { SearchBar } from './SearchBar/Searchbar';

export const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query') ?? '';

  const onFormSubmit = query => {
    setSearch(query);
    setSearchParams(query !== '' ? { query } : {});
  };
  useEffect(() => {
    if (!filter && !search) {
      return;
    }
    async function findFilm() {
      const listOfMovies = await findFilms(filter ? filter : search);
      setMovies(listOfMovies);
    }
    findFilm();
  }, [filter, search]);
  return (
    <>
      <Title>Movies</Title>
      <SearchBar onFormSubmit={onFormSubmit} />
      <Box>
        <MoviesList>
          {movies.map(({ id, original_title }) => (
            <MovieItem key={id}>
              <NavItem to={`${id}`} state={{ home: location }}>
                {original_title}
              </NavItem>
            </MovieItem>
          ))}
        </MoviesList>
      </Box>
    </>
  );
};
