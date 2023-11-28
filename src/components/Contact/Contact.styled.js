import styled from 'styled-components';
import { getRandomHexColor } from '../General/RandomColor';

export const ContactItem = styled.li`
  display: flex;
  gap: ${p => p.theme.spacing(3)};
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(3)};
  border-radius: 5px;
  border-left: ${p => p.theme.spacing(3)} solid ${() => getRandomHexColor()};
  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  letter-spacing: 2px;
  transition: 0.3s all linear;

  &:hover {
    border-left: 10px solid transparent;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    gap: ${p => p.theme.spacing(6)};
  }
`;

export const User = styled.span`
  font-size: 16px;
`;

export const DeleteContact = styled.button`
  display: inline-block;
  text-decoration: none;
  outline: none;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  & :hover,
  & :focus {
    box-shadow: 0 1px 2px 0 rgb(26 115 232 / 45%),
      0 1px 3px 1px rgb(26 115 232 / 30%);
  }
  > svg {
    color: ${p => p.theme.colors.grey};
  }

  &:hover > svg,
  &:focus > svg {
    color: ${p => p.theme.colors.accent};
  }
`;

export const UpdateContact = styled.button`
  display: inline-block;
  text-decoration: none;
  outline: none;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  & :hover,
  & :focus {
    box-shadow: 0 1px 2px 0 rgb(26 115 232 / 45%),
      0 1px 3px 1px rgb(26 115 232 / 30%);
  }
  > svg {
    color: ${p => p.theme.colors.grey};
  }

  &:hover > svg,
  &:focus > svg {
    color: ${p => p.theme.colors.accent};
  }
`;