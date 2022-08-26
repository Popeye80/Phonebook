import styles from './ContactForm.module.css';
import { useGetContactsQuery } from 'redux/contactsApi';
import Spiner from 'components/Spiner';
import { useState } from 'react';
import { useAddContactMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        throw new Error('Worng state type!');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const allContacts =
      data &&
      data.reduce((acc, contact) => {
        acc.push(contact.name.toLocaleLowerCase());
        return acc;
      }, []);

    if (allContacts.includes(name.toLocaleLowerCase())) {
      toast.error(`${name} already in contacts.`);

      return;
    }

    addContact({ name, number });
    toast.success(`😸 ${name} contact successfully added`);
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          className={styles.inputName}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash, numbers and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          maxLength="14"
          minLength="1"
        />
      </div>
      <div className={styles.wrapper}>
        <label htmlFor="number" className={styles.label}>
          Number:
        </label>
        <input
          className={styles.inputNumber}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          maxLength="14"
        />
      </div>
      <button type="submit" className={styles.addBtn}>
        {isLoading ? (
          <Spiner width={18} height={18} color="#fff" />
        ) : (
          <span>Add contact</span>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
