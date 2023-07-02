import PropTypes from 'prop-types';
import { Li, StyledLink } from './MovieList.styled';

export default function MovieList({ data, location }) {
  return (
    <ul>
      {data.map(({ id, original_title }) => (
        <Li key={id}>
          <StyledLink state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </StyledLink>
        </Li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
