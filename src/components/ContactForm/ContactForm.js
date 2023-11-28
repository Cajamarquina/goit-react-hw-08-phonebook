import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsAPI';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledForm,
  Error,
  StyledInput,
  AddContactButton,
  UserIcon,
  UserPhone,
} from './ContactForm.styled';
import { selectContacts } from '../../redux/contacts/contactsSelectors';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('This is a required field'),
  number: Yup.string()
    .trim()
    .matches(
      /^\+?\d{1,4}?[ .\-s]?(\(\d{1,3}?\))?([ .\-s]?\d{1,4}){1,4}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This is a required field')
    .min(9, 'Please enter at least 9 characters'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, actions) => {
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (nameExists) {
      return Notify.failure(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact(values));
      Notify.success(`${values.name} added to contacts`);
      actions.resetForm({ name: '', number: '' });
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
      validationSchema={ContactSchema}
    >
      <StyledForm>
        <label>
          Name
          <UserIcon />
          <StyledInput name="name" type="text" />
          <Error name="name" component="span" />
        </label>
        <label>
          Number
          <StyledInput name="number" type="tel" />
          <UserPhone />
          <Error name="number" component="span" />
        </label>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </StyledForm>
    </Formik>
  );
};