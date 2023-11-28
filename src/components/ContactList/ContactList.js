import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { selectVisibleContacts } from '../../redux/contacts/contactsSelectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <List>
      {visibleContacts.map(user => (
        <Contact
          key={user.id}
          id={user.id}
          name={user.name}
          number={user.number}
        />
      ))}
    </List>
  );
};