import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout';
import Cast from 'components/Cast';
import Review from 'components/Review';

const Home = lazy(() => import('pages/Home'));

const Movies = lazy(() => import('pages/Movies'));

const MovieDetail = lazy(() => import('pages/MoviesDetail'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
