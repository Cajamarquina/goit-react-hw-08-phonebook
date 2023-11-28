import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  width: 50%;
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const SearchField = styled.input`
  position: relative;
  font-size: 16px;
  width: 100%;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(1)}
    ${p => p.theme.spacing(2)} ${p => p.theme.spacing(5)};
  border: 2px solid ${p => p.theme.colors.accent};
  outline: none;
  color: ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.spacing(2)};
  transition: background-color 0.2s;
  background: transparent;

  + svg {
    position: absolute;
    top: 40px;
    left: 4px;
    color: ${p => p.theme.colors.grey};

    @media only screen and (min-width: 320px) and (max-width: 332px) {
      top: 60px;
      left: 4px;
    }
  }

  &:focus,
  :hover {
    background-color: ${p => p.theme.colors.bgInput};
  }

  &:focus + svg {
    color: ${p => p.theme.colors.accent};
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;