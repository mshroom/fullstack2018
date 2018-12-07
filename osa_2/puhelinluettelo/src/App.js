import React from 'react';
import axios from 'axios'

const Person = (props) => {
    return (
      <tr>
          <td>{props.person.name}</td>
          <td>{props.person.phone}</td>
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
            value={props.state.newPhone}
            onChange={props.handleNewPhone}
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
      newPhone: ''
    }
  }

  componentDidMount() {
      console.log('did mount')
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
            console.log('promise fulfilled')
            this.setState({ persons: response.data })
        })
  }

  addPerson = (event) => {
      event.preventDefault()
      const personObject = {
          name: this.state.newName,
          phone: this.state.newPhone
      }
      const names = this.state.persons.map(person => person.name)
      if (names.includes(personObject.name)) {          
        return
      }     

      const persons = this.state.persons.concat(personObject)
      this.setState({
          persons,
          newName: '',
          newPhone: ''
      })
  }

  handleNewName = (event) => {
      this.setState({ newName: event.target.value })
  }

  handleNewPhone = (event) => {
      this.setState({ newPhone: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <PersonForm state={this.state} addPerson={this.addPerson.bind(this)} handleNewName={this.handleNewName.bind(this)} handleNewPhone={this.handleNewPhone.bind(this)} />
        <h2>Numerot</h2>
        <PersonList persons={this.state.persons}/>
      </div>
    )
  }
}

export default App