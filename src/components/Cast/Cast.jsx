import { getCastById } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getCast() {
      const cast = await getCastById(movieId);
      setCast(cast);
    }
    getCast();
  }, [movieId]);
  if (!cast) {
    return null;
  }
  return (
    <CastList>
      {cast.map(({ name, character, profile_path }) => (
        <CastItem key={name}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt=""
            width="200"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
