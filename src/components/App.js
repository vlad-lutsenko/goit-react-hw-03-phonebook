import React, { Component } from "react";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm ";
import ContactList from "./ContactList/ContactList ";
import Filter from "./Filter/Filter";
import storage from "../helpers/localStorageHelper";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { save, get } = storage;

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  deleteContactbyId = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: [...updatedContacts],
    });
  };

  addContact = (contact) => {
    const newName = contact.name;
    const names = this.state.contacts.map((contact) =>
      contact.name.toLowerCase()
    );
    if (names.includes(newName.toLowerCase().trim())) {
      toast.configure();
      toast.error(`${newName} is already in contact list`);
    } else {
      this.setState((state) => ({
        contacts: [...state.contacts, contact],
      }));
    }
  };

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    if (contacts.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  componentDidMount() {
    if (get("contacts")) {
      this.setState({
        contacts: [...get("contacts")],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      save("contacts", this.state.contacts);
    }
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        {!!contacts.length && (
          <Section title="Contacts">
            {contacts.length > 1 && <Filter onChange={this.changeHandler} />}

            <ContactList
              contacts={this.filterContactsByName()}
              onDelete={this.deleteContactbyId}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
