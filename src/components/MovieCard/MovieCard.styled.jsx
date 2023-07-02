import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: block;
  margin-bottom: 12px;

  font-size: 32px;
  font-weight: 700;
  text-decoration: none;

  color: #212121;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #e00480;
  }
`;

export const MovieBlock = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
`;

export const MovieInfoBlock = styled.div`
  width: 780px;
  margin-top: 40px;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 12px;
`;

export const Img = styled.img`
  display: block;
  margin-bottom: 12px;

  border-radius: 15px;
`;

export const LiAdditional = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const StyledLinkToAdditional = styled(NavLink)`
  color: #212121;
`;

export const UlAdditional = styled.ul`
  margin-bottom: 12px;
`;
