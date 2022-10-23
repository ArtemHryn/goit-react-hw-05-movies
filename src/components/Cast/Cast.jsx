import { getCastById } from 'components/services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
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
    <ul>
      {cast.map(({ name, character }) => (
        <li key={name}>
          {' '}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
