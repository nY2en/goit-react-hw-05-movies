import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import api from 'services/api';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MovieDetail() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    api.fetchMovieByID(movieId).then(data => {
      setData(data);

      setStatus('resolved');
    });
  }, [movieId]);

  if (status === 'resolved') {
    let year = data.release_date.split('');
    year.splice(4);
    year = year.join('');

    return (
      <>
        <MovieCard
          data={data}
          backLinkLocationRef={backLinkLocationRef}
          year={year}
        />
        <Outlet />
      </>
    );
  }
}
