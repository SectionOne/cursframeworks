import './App.css';
import FunctionalParentComponent from './FunctionalParentComponent.jsx';
import ClasseParentFillaPare from './ClasseParentFillaPare.jsx';
import FunctionalParentFillaPare from './FunctionalParentFillaPare.jsx';
import ParentNoRelationalComponents from './ParentNoRelationalComponents.jsx';
import ClassComponentMuntatge1 from './muntatge/ClassComponent1.jsx';
import ClassComponentMuntatge from './muntatge/ClassComponent.jsx';
import FunctionalComponentActualitzacio from './actualitzacio/FunctionalComponent.jsx';
import ClassComponentActualitzacio from './actualitzacio/ClassComponent.jsx';
import FunctionalComponentDesmuntatge from './desmuntatge/FunctionalComponent.jsx';
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
      <div>
        <h2>Sóc un component de Classe, parlant de fill a pare</h2>
        <ClasseParentFillaPare/>
      </div>
      <div>
        <h2>Sóc un component Funcional, parlant de fill a pare</h2>
        <FunctionalParentFillaPare/>
      </div>
      <div>
        <h2>Sóc un component Pare amb comunicació entre components no relacional</h2>
        <ParentNoRelationalComponents />
      </div>
      <div>
        <h2>Sóc un component de muntatge funcional</h2>
        <ClassComponentMuntatge />
      </div>
      <div>
        <h2>Sóc un component de muntatge de classe</h2>
        <ClassComponentMuntatge1 />
      </div>
      <div>
        <h2>Sóc un component d’Actualitzacio funcional</h2>
        <FunctionalComponentActualitzacio />
      </div>
      <div>
        <h2>Sóc un component d’Actualitzacio de Classe</h2>
        <ClassComponentActualitzacio />
      </div>
      <div>
        <h2>Sóc un component de Desmuntatge de Classe</h2>
        <FunctionalComponentDesmuntatge  />
      </div>
    </>
  );
}
export default App;
