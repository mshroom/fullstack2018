import React from 'react';

const Person = (props) => <p>{props.person.name}</p>

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
      event.preventDefault()
      const personObject = {
          name: this.state.newName
      }
      const names = this.state.persons.map(person => person.name)
      if (names.includes(personObject.name)) {          
        return
      }     

      const persons = this.state.persons.concat(personObject)
      this.setState({
          persons,
          newName: ''
      })
  }

  handleNewName = (event) => {
      this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input 
            value={this.state.newName}
            onChange={this.handleNewName}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
          {this.state.persons.map(person=><Person key={person.name} person={person} />)}
        </div>
      </div>
    )
  }
}

export default App