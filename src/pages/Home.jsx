import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from 'services/api';
import MovieList from 'components/MoviesList';

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
        <MovieList data={data} location={location} />
      </>
    );
  }
}
