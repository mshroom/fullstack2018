import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
    }
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1
    })
  }

  render() {

    const keskiarvo = () => {
      let sum = this.state.hyva + this.state.neutraali + this.state.huono
      if (sum === 0) {
        return 0
      }
      let ca = (this.state.hyva - this.state.huono) / sum
        return ca.toFixed(1) 
    }
    const positiivisia = () => {
      let sum = this.state.hyva + this.state.neutraali + this.state.huono
      if (this.state.hyva === 0) {
        return 0
      }
      return (this.state.hyva / sum * 100).toFixed(1)
    }
      return (
      <div>
        <h1>anna palautetta</h1>
        <div>
          <button onClick={this.klikHyva}>hyvä</button>
          <button onClick={this.klikNeutraali}>neutraali</button>
          <button onClick={this.klikHuono}>huono</button>
        </div>
        <h1>statistiikka</h1>
        <div>
          <p>hyvä {this.state.hyva}</p>
          <p>neutraali {this.state.neutraali}</p>
          <p>huono {this.state.huono}</p>
          <p>keskiarvo {keskiarvo()}</p>
          <p>positiivisia {positiivisia()} %</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)