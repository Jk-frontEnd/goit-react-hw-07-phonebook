import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, selectAllContacts } from '../../redux/contactSlice';
import { ContactElem } from '../ContactElem/ContactElem';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContactsList = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filteredContactsList(contacts, ""); // You can pass the filter value if needed

  return (
    <div className={css.contBox}>
      <h2 className={css.header}>Contacts</h2>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactElem key={id} contact={{ id, name, number }} />
        ))}
      </ul>
    </div>
  );
};

export { ContactList };
