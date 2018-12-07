import React from 'react';
import personService from './services/persons'

const Person = (props) => {
    return (
      <tr>
          <td>{props.person.name}</td>
          <td>{props.person.number}</td>
      </tr>     
    )
}

const PersonList = (props) => {
    return (
        <div>
          <table>
            <tbody>              
                 {props.persons.map(person=><Person key={person.name} person={person} />)}                       
            </tbody>
          </table>
        </div>
    )
}

const PersonForm = (props) => {
    return (
      <form onSubmit={props.addPerson}>
        <div>
          nimi: <input 
          value={props.state.newName}
          onChange={props.handleNewName}
          />
        </div>
        <div>
            numero: <input
            value={props.state.newNumber}
            onChange={props.handleNewNumber}
            />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: ''
    }
  }

  componentDidMount() {
      personService
        .getAll()
        .then(response => {
            this.setState({ persons: response.data })
        })
  }

  addPerson = (event) => {
      event.preventDefault()
      const personObject = {
          name: this.state.newName,
          number: this.state.newNumber
      }
      const names = this.state.persons.map(person => person.name)
      if (names.includes(personObject.name)) {          
        return
      }     

      personService
        .create(personObject)
        .then(response => {
            const persons = this.state.persons.concat(personObject)
            this.setState({
                persons,
                newName: '',
                newNumber: ''
            })
        })

  }

  handleNewName = (event) => {
      this.setState({ newName: event.target.value })
  }

  handleNewPhone = (event) => {
      this.setState({ newNumber: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <PersonForm state={this.state} addPerson={this.addPerson.bind(this)} handleNewName={this.handleNewName.bind(this)} handleNewNumber={this.handleNewPhone.bind(this)} />
        <h2>Numerot</h2>
        <PersonList persons={this.state.persons}/>
      </div>
    )
  }
}

export default App