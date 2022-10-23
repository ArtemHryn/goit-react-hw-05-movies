import { Box } from 'components/Box';

export const MovieDesc = ({ movie }) => {
  const { original_title, release_date, vote_average, overview, genres } =
    movie;

  const genresName = genres.map(genre => genre.name).join(' ');
    return (
        <Box ml={6}>
      <h2>
        {original_title}({new Date(release_date).getFullYear()})
      </h2>
      <p>User Scode: {vote_average}</p>
      <h3>Overview:</h3>
      <p>{overview}</p>
      <h3>Genres:</h3>
      <p>{genresName}</p>
    </Box>
  );
};
