import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import api from 'services/api';
import Searchbar from 'components/Searchbar';
import MovieList from 'components/MoviesList';

export default function Movies() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParam, setSearchParams] = useSearchParams();
  const query = searchParam.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    api.fetchMovieBySearchQuery(query).then(data => {
      setData(data.results);

      setStatus('resolved');
    });
  }, [query]);

  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {status === 'resolved' && <MovieList data={data} location={location} />}
    </>
  );
}
