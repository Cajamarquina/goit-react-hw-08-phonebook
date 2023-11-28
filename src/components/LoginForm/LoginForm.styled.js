import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  position: relative;
  width: 250px;
  margin: ${p => p.theme.spacing(10)} auto 0;
  background: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.spacing(8)};

  @media only screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const StyledInput = styled(Field)`
  display: block;
  width: 100%;
  padding: 0 ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(2)};
  line-height: ${p => p.theme.spacing(10)};
  border-width: 0;
  border-radius: ${p => p.theme.spacing(5)};

  &:focus,
  :hover {
    background-color: ${p => p.theme.colors.bgInput};
  }
`;

export const FormInner = styled.div`
  padding: ${p => p.theme.spacing(12)};
`;

export const ButtonSubmit = styled.button`
  text-decoration: none;
  display: block;
  margin: 0 auto;
  margin-top: ${p => p.theme.spacing(8)};
  width: 150px;
  height: 40px;
  border-radius: ${p => p.theme.spacing(5)};
  font-family: inherit;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  border-color: ${p => p.theme.colors.grey};
  background: transparent;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.grey};
    box-shadow: 0 15px 20px rgba(0, 128, 128, 0.4);
    color: ${p => p.theme.colors.white};
    transform: translateY(-7px);
  }
`;

export const Error = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;
  display: block;
`;

export const Circle = styled.div`
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${p => p.theme.colors.accent};
`;

export const LeftDecoration = styled.div`
  content: '';
  position: absolute;
  bottom: 60px;
  left: -30px;
  width: 50px;
  height: 20px;
  background: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.spacing(5)};

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    border-radius: ${p => p.theme.spacing(8)};
  }

  &::before {
    top: -20px;
    background-color: rgb(162, 221, 228);
  }

  &::after {
    top: 20px;
    left: 10px;
    background-color: rgb(152, 216, 225);
  }
`;

export const RightDecoration = styled.div`
  content: '';
  position: absolute;
  top: 60px;
  right: -30px;
  width: 50px;
  height: 20px;
  background: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.spacing(5)};

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 20px;
    border-radius: ${p => p.theme.spacing(8)};
    background: ${p => p.theme.colors.white};
  }

  &::before {
    top: -20px;
    right: 0;
    background-color: rgb(210, 238, 242);
  }

  &::after {
    top: 20px;
    right: 10px;
    background-color: rgb(196, 233, 238);
  }
`;