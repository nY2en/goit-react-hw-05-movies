import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';

export default function Cast() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieCast(movieId).then(data => {
      setData(data.cast);

      setStatus('resolved');
    });
  }, [movieId]);

  if (status === 'resolved') {
    return (
      <ul>
        {data.map(el => (
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/w400/${el.profile_path}`}
              alt={data.tagline}
              width="150"
            />
            <p>{el.original_name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
