import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';

export default function Cast() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieCast(movieId).then(({ cast }) => {
      setData(cast);

      setStatus('resolved');
    });
  }, [movieId]);

  if (status === 'resolved') {
    return (
      <ul>
        {data.map(({ id, name, original_name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${profile_path}`}
              alt={name}
              width="150"
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
