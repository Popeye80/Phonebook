import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useChangeContactMutation } from 'redux/contactsApi';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ id, name, number, toggleModal }) => {
  const [changeContact] = useChangeContactMutation();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setNewName(event.currentTarget.value);
        break;
      case 'number':
        setNewNumber(event.currentTarget.value);
        break;
      default:
        throw new Error('Worng state type!');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    changeContact({ contactId: id, newName, newNumber });
    setNewName('');
    setNewNumber('');
    toggleModal();
  };

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>
        {' '}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.wrapper}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              className={styles.inputName}
              onChange={handleChange}
              value={newName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="number" className={styles.label}>
              Number:
            </label>
            <input
              className={styles.inputNumber}
              onChange={handleChange}
              value={newNumber}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <button type="submit" className={styles.addBtn}>
            <span>Change contact</span>
          </button>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
