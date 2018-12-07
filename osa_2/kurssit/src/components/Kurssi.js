import React from 'react'

const Osa = (props) => <p>{props.osa.nimi} {props.osa.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = (props) => {
  const osat = props.kurssi.osat
  return(
    <div>
      {osat.map(osa=><Osa key={osa.id} osa={osa}/>)}
    </div>
  )
}
const Yhteensa = (props) => {
  const osat = props.kurssi.osat
  let sum = 0
  osat.forEach((osa) => {
    sum += osa.tehtavia
  })
  
  return(
    <p>yhteensä {sum} tehtävää</p>
  )
}

const Kurssi = (props) => {
    return(
        <div>
          <Otsikko kurssi={props.kurssi}/>
          <Sisalto kurssi={props.kurssi} />
          <Yhteensa kurssi={props.kurssi}  />
        </div>
    )
}

export default Kurssi