import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieList({ data, location }) {
  return (
    <ul>
      {data.map(({ id, original_title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
