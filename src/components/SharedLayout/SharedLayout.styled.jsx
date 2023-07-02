import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 20px 24px;

  background: #3392b1;

  border-bottom: 1px solid #b4b4b4;
  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
    0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;

  color: #ffffff;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #e00480;
  }
`;

export const Main = styled.main`
  padding: 20px;
`;
