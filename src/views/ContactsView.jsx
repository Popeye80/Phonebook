import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import EmptyMessage from 'components/EmptyMessage';
import Filter from 'components/Filter';
import Spiner from 'components/Spiner';
import {
  ViewWrapper,
  HeaderSection,
  MainSection,
  ContactsSection,
  ContactsTitle,
} from './Views.styled';

import { useGetContactsQuery } from 'redux/contactsApi';

export default function ContactsView() {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <ViewWrapper>
      <HeaderSection>
        <h1>Phonebook</h1>
      </HeaderSection>
      <MainSection>
        <ContactsTitle>Add new contact</ContactsTitle>
        <ContactForm />
        <ContactsSection>
          <ContactsTitle>Your contacts</ContactsTitle>
          {isLoading && <Spiner width={50} height={50} color="blue" />}
          {data && data.length > 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            !isLoading && <EmptyMessage />
          )}
        </ContactsSection>
      </MainSection>
    </ViewWrapper>
  );
}
