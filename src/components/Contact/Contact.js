import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { CustomModalForm } from 'components/CustomModal/CustomModal';
import { deleteContact } from '../../redux/contacts/contactsAPI';
import { MdDeleteForever, MdDriveFileRenameOutline } from 'react-icons/md';
import {
  ContactItem,
  User,
  DeleteContact,
  UpdateContact,
} from './Contact.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1001',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '10002',
  },
};

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlerOnClick = id => {
    dispatch(deleteContact(id));
    Notify.success(`Contact deleted`);
  };

  return (
    <ContactItem>
      <User>
        {name}: {number}
      </User>
      <DeleteContact type="button" onClick={() => handlerOnClick(id)}>
        <MdDeleteForever size={'24px'} />
      </DeleteContact>
      <UpdateContact type="button" onClick={openModal}>
        <MdDriveFileRenameOutline size={'24px'} />
      </UpdateContact>
      {isModalOpen && (
        <CustomModalForm
          isOpen={isModalOpen}
          onClose={closeModal}
          userId={id}
          customStyles={customStyles}
        />
      )}
    </ContactItem>
  );
};