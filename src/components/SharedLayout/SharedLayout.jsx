import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>

      <footer></footer>
    </>
  );
}
