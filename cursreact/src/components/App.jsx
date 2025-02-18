import './App.css';
import FunctionalParentComponent from './FunctionalParentComponent.jsx';
import Header from './Header.jsx';
import ParentComponent from './ParentComponent.jsx';
function App() {
  return (
    <>
      <div className='bg-primary card'>
        <Header/>
      </div>
      <div>
        <h2>Sóc un component de Classe, parlant amb el meu fill</h2>
        <ParentComponent/>
      </div>
      <div>
        <h2>Sóc un component Funcional, parlant amb el meu fill</h2>
        <FunctionalParentComponent/>
      </div>
    </>
  );
}
export default App;
