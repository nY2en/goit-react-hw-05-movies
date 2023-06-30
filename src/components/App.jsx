import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/Home';
import MovieDetail from 'pages/MoviesDetail';
import Cast from 'components/Cast';
import Review from 'components/Review';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<h1>Movies Page</h1>} />
        <Route path="movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
