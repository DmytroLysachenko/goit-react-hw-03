import { useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";

export const App = () => {
  const defaultValues = JSON.parse(window.localStorage.getItem("contacts")) ?? [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [contacts, setContacts] = useState(defaultValues);
  const [searchStr, setSearchStr] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchStr)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={setContacts} />
      <SearchBox setSearchStr={setSearchStr} />
      <ContactList contacts={filteredContacts} deleteContact={setContacts} />
    </div>
  );
};

[
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
