import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from '../redux/contacts/contactsAPI';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/contactsSelectors';
import { Filter } from 'components/Filter/Filter';
import { ContainerLoader } from 'components/ContainerLoader/ContainerLoader';
import { ColorRing } from 'react-loader-spinner';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      {isLoading && (
        <ContainerLoader>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </ContainerLoader>
      )}
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Phonebook is empty</p>
      )}
      {error && <span>Whoops... Error! Please, reload this page!</span>}
    </div>
  );
}