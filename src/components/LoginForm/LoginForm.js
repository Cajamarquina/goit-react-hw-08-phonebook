import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormInner,
  LeftDecoration,
  RightDecoration,
  Circle,
  StyledInput,
  StyledForm,
  ButtonSubmit,
  Error,
} from './LoginForm.styled';
import { logIn } from '../../redux/auth/authAPI';

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  password: Yup.string().required('This is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm({ email: '', password: '' });
    Notify.success(`Authorization completed`);
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
      validationSchema={ContactSchema}
    >
      <StyledForm autoComplete="off">
        <LeftDecoration></LeftDecoration>
        <RightDecoration></RightDecoration>
        <Circle></Circle>
        <FormInner>
          <label>
            Email
            <StyledInput name="email" type="email" />
            <Error name="email" component="span" />
          </label>
          <label>
            Password
            <StyledInput name="password" type="password" />
            <Error name="password" component="span" />
          </label>
          <ButtonSubmit type="submit">Log In</ButtonSubmit>
        </FormInner>
      </StyledForm>
    </Formik>
  );
};