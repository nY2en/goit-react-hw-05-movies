import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from 'services/api';
import Title from 'components/Title';
import MovieList from 'components/MovieList';

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
        <Title>Trending Today</Title>
        <MovieList data={data} location={location} />
      </>
    );
  }
}
