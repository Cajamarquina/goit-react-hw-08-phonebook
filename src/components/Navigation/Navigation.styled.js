import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
  border-radius: ${p => p.theme.spacing(1)};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: 500;
  transition: 0.5s;

  &.active {
    color: ${p => p.theme.colors.white};
    background-image: linear-gradient(
      to right,
      #02aab0 0%,
      #00cdac 51%,
      #02aab0 100%
    );
    border-color: ${p => p.theme.colors.accent};
    box-shadow: 0 5px 15px 0 rgba(11, 99, 246, 1);
  }

  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 20px 40px 0 rgba(11, 99, 246, 1);
    background-image: linear-gradient(
      to right,
      #02aab0 0%,
      #00cdac 51%,
      #02aab0 100%
    );
  }
`;