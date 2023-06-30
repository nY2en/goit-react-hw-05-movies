import { useEffect, useRef, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import api from 'services/api';

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
    const year = data.release_date.split('');

    year.splice(4);

    return (
      <>
        <Link to={backLinkLocationRef.current}>Go Back</Link>

        <div style={{ display: 'flex' }}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
            alt={data.tagline}
          />
          <div>
            <h1>Indiana Jones and the Dial of Destiny ({year.join('')})</h1>
            <p>User score: {Math.round(data.vote_average * 10)}</p>
            <h2>Overview</h2>
            <p>{data.overview}</p>
            <h2>Genres</h2>
            <ul>
              {data.genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2> Additional information</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </>
    );
  }
}
