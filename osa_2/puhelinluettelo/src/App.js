import React from 'react';

const Person = (props) => {
    return (
      <tr>
          <td>{props.person.name}</td>
          <td>{props.person.phone}</td>
      </tr>     
    )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', phone: '0123456'}
      ],
      newName: '',
      newPhone: ''
    }
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
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input 
            value={this.state.newName}
            onChange={this.handleNewName}
            />
          </div>
          <div>
              numero: <input
              value={this.state.newPhone}
              onChange={this.handleNewPhone}
              />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
          <table>
            <tbody>              
                 {this.state.persons.map(person=><Person key={person.name} person={person} />)}                       
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App