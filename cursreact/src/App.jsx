/* eslint-disable no-constant-condition */
import './App.css'

function sumar(){
  return 2 + 2
}

const nom = "Joan"

const inlineStyle = {
  color: "#2ecc71",
  fontSize: "26px"
}
function App() {
    return (
    <>
      <p style={inlineStyle}>Curs React</p>
      <div className='red'>
        <h2>Children</h2>
      </div>
      <h1 className='red'>Funcions { sumar() }</h1>
      <h1>Operacions Matematiques { 3 + 2 }</h1>
      <h1>String { `Hola ${nom}` }</h1>
      <h1>Logica / Ternari { (3 + 2) > 6 ? "Mayor" : "Menor" }</h1>
      <img src="" alt="" />
    </>
  )
}

export default App
