/* eslint-disable no-constant-condition */
import './App.css'

function App() {
  const functionWithParameters = (parameter) => {
    console.log(`Funció activada desde: ${parameter}`)
  }
    return (
    <>
      <button onClick={() => functionWithParameters('onClick')}>On Click</button>
      <h1 onMouseOver={() => functionWithParameters('onMouseOver')}>Mouse Over Event</h1>
    </>
  )
}

export default App
