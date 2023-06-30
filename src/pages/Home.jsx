import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from 'services/api';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  const location = useLocation();

  useEffect(() => {
    api.fetchTrendingMovies().then(data => {
      setData(data.results);

      setStatus('resolved');
    });
  }, []);

  if (status === 'resolved') {
    return (
      <>
        <h1>Trending Today</h1>
        <ul>
          {data.map(el => (
            <li key={el.id}>
              <Link state={{ from: location }} to={`movies/${el.id}`}>
                {el.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
