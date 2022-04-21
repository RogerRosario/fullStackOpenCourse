import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {

    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })

  }, [])

  const handleSearchName = (e) => {

    setSearchName(e.target.value);

  }

  const addPerson = (e) => {

    const existPerson = persons.find((person) => person.name === newName)

    e.preventDefault();

    if (existPerson) {
      alert(`${newName} is already added to phonebook.`)
    }
    else {

      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }

      setPersons(persons.concat(personObject));
      setNewName('')
      setNewNumber('')

    }

  }

  const filterPerson = searchName.trim()
    ? persons.filter(person => person.name.toLowerCase().includes(searchName))
    : persons

  const formData = {
    newNumber, setNewNumber, newName, setNewName
  }

  return (
    <div>

      <h2>PhoneBook</h2>

      <Filter searchName={searchName} setSearchName={handleSearchName} />

      <h2>Add a new </h2>

      <PersonForm formOnSubmit={addPerson} data={formData} />

      <h2>Numbers</h2>

      <Persons persons={filterPerson} />

    </div>
  )

}

export default App;
