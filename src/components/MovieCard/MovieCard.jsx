import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieCard({ data, backLinkLocationRef, year }) {
  const {
    tagline,
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
  } = data;

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go Back</Link>

      <div style={{ display: 'flex' }}>
        <img
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          alt={tagline}
        />
        <div>
          <h1>
            {original_title} ({year})
          </h1>
          <p>User score: {Math.round(vote_average * 10)} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
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
    </>
  );
}

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
  backLinkLocationRef: PropTypes.object.isRequired,
  year: PropTypes.string.isRequired,
};
