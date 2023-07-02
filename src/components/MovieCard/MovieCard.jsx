import PropTypes from 'prop-types';
import {
  StyledLink,
  MovieBlock,
  MovieInfoBlock,
  Ul,
  Li,
  H2,
  Img,
  LiAdditional,
  StyledLinkToAdditional,
  UlAdditional,
} from './MovieCard.styled';

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
      <StyledLink to={backLinkLocationRef.current}>Go Back</StyledLink>

      <MovieBlock>
        <Img
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          alt={tagline}
        />
        <MovieInfoBlock>
          <h1>
            {original_title} ({year})
          </h1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <H2>Overview</H2>
          <p>{overview}</p>
          <H2>Genres</H2>
          <Ul>
            {genres.map(({ id, name }) => (
              <Li key={id}>{name}</Li>
            ))}
          </Ul>
        </MovieInfoBlock>
      </MovieBlock>
      <div>
        <H2> Additional information</H2>
        <UlAdditional>
          <LiAdditional>
            <StyledLinkToAdditional to="cast">Cast</StyledLinkToAdditional>
          </LiAdditional>
          <LiAdditional>
            <StyledLinkToAdditional to="reviews">
              Reviews
            </StyledLinkToAdditional>
          </LiAdditional>
        </UlAdditional>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
  backLinkLocationRef: PropTypes.object.isRequired,
  year: PropTypes.string.isRequired,
};
