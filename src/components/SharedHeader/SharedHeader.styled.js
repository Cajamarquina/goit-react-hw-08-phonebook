import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${p => p.theme.spacing(3)};
  padding: ${p => p.theme.spacing(2)} 0;
  margin-bottom: ${p => p.theme.spacing(10)};
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    gap: ${p => p.theme.spacing(2)};

    @media only screen and (min-width: 768px) {
      gap: ${p => p.theme.spacing(4)};
    }
  }
`;