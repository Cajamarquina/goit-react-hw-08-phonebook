import React from 'react';
import { Formik } from 'formik';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { updateContact } from '../../redux/contacts/contactsAPI';
import * as Yup from 'yup';
import {
  StyledForm,
  Error,
  StyledInput,
  UpdateContactButton,
  UserIcon,
  UserPhone,
} from './CustomModal.styled';

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

Modal.setAppElement('#root');

export const CustomModalForm = ({ isOpen, onClose, userId, customStyles }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, actions) => {
    const newData = {
      id: userId,
      data: values,
    };
    dispatch(updateContact(newData));
    Notify.success(`Contact updated`);
    actions.resetForm({ name: '', number: '' });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Modal Form"
    >
      <button onClick={onClose}>&times;</button>
      <h2>Please, enter new contact details:</h2>
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
          <UpdateContactButton type="submit">
            Update contact
          </UpdateContactButton>
        </StyledForm>
      </Formik>
    </Modal>
  );
};