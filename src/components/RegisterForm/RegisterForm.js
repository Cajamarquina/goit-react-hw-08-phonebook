import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  FormInner,
  ButtonSubmit,
  Error,
  StyledInput,
  Circle,
  LeftDecoration,
  RightDecoration,
} from './RegisterForm.styled';
import { register } from '../../redux/auth/authAPI';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('This is a required field'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
      'Please create a stronger password. It must contain one uppercase and one lowercase letter'
    )
    .required('This is a required field'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    Notify.success(`${values.name} registered!`);
    actions.resetForm({ name: '', email: '', password: '' });
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
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
            Name
            <StyledInput name="name" type="text" />
            <Error name="name" component="span" />
          </label>
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