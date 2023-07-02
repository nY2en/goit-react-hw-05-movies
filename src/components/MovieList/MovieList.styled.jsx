import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Li = styled.li`
  margin-bottom: 8px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;

  color: black;

  &:hover {
    color: #e00480;
  }
`;
