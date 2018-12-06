import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ name, value }) => (
  <p>{name} {value}</p>
)

function keskiarvo(hyva, huono, neutraali) {
  let sum = hyva + neutraali + huono
  if (sum === 0) {
    return (0).toFixed(1)
  }
  return ((hyva - huono) / sum).toFixed(1)
}

function positiivisia(hyva, huono, neutraali) {
  let sum = hyva + neutraali + huono
  if (sum === 0 || hyva === 0) {
    return (0).toFixed(1) + " %"
  }
  return (hyva / (hyva + huono + neutraali) * 100).toFixed(1) + " %"
}

const Statistics = (props) => {
  return (
    <div>
      <h1>statistiikka</h1>
      <Statistic
          name="hyvä" value={props.hyva}
      />
        <Statistic
          name="neutraali" value={props.neutraali}
        />
        <Statistic
          name="huono" value={props.huono}
        />    
        <Statistic
          name="keskiarvo" value={keskiarvo(props.hyva, props.huono, props.neutraali)}

        />       
        <Statistic
          name="positiivisia" value={positiivisia(props.hyva, props.huono, props.neutraali)}
        />
    </div>
  )
}

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
      hyva: this.state.hyva + 1
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1
    })
  }

  render() {

      return (
      <div>
        <h1>anna palautetta</h1>
        <div>
          <Button
            handleClick={this.klikHyva}
            text="hyvä"
          />
          <Button
            handleClick={this.klikNeutraali}
            text="neutraali"
          />      
          <Button
            handleClick={this.klikHuono}
            text="huono"
          />    
        </div>
        <div>
          <Statistics
            hyva={this.state.hyva}
            huono={this.state.huono}
            neutraali={this.state.neutraali}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)