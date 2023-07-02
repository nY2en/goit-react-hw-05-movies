import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Nav, Ul, Li, StyledLink, Main } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <header>
        <Nav>
          <Ul>
            <Li>
              <StyledLink to="/">Home</StyledLink>
            </Li>
            <Li>
              <StyledLink to="/movies">Movies</StyledLink>
            </Li>
          </Ul>
        </Nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>

      <footer></footer>
    </>
  );
}
