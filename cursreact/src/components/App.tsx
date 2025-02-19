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
import ClassComponentDesmuntatge from './desmuntatge/ClassComponent.jsx';
import GreetingReactFC from './tscomponents/FunctionalComponentReactFc.js';
import GreetingReact from './tscomponents/FunctionalComponentReact.js';
import GreetingLogin from './tscomponents/ClassComponent.js';
import PropsOpcionals from './tsprops/PropsOpcionals.js';
import PropsDefecte from './tsprops/PropsDefecte.js';
import PropsFuncions from './tsprops/PropsFuncions.js';
import AltresChildren from './altrescasos/children.tsx';
import Header from './Header.jsx';
import ParentComponent from './ParentComponent.jsx';
import React from 'react';
const App = () => {
  // Funció que s'executa en fer clic al botó
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert('Has fet clic al botó!');
  };

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
      <div>
        <h2>Sóc un component de Desmuntatge de Classe</h2>
        <ClassComponentDesmuntatge />
      </div>
      <div>
        <h2>Sóc un component React Tipat Funcional amb React.FC</h2>
        <GreetingReactFC name="John" age={30} />
      </div>
      <div>
        <h2>Sóc un component React Tipat Funcional sense React.FC</h2>
        <GreetingReact name="John" age={30} />
      </div>
      <div>
        <h2>Sóc un component React Tipat de Classe</h2>
        <GreetingLogin name="John" age={30} />
      </div>
      <div>
        <h2>Sóc un component amb Props Opcionals</h2>
        <PropsOpcionals name="John" age={30} />
        <PropsOpcionals name="John" />
      </div>
      <div>
        <h2>Sóc un component amb Props per Defecte</h2>
        {/* Exemple amb nom i edat */}
        <PropsDefecte name="Joan" age={30} />

        {/* Exemple només amb nom (age pren el valor per defecte) */}
        <PropsDefecte name="Maria" />
      </div>
      <div>
        <h2>Sóc un component amb Props amb Funcions</h2>
        {/* Utilitzem el component Button */}
        <PropsFuncions onClick={handleClick} label="Fes clic aquí" />
      </div>
      <div>
        <AltresChildren>
          <h1>Benvingut/da!</h1>
          <p>Aquest és un exemple de children.</p>
        </AltresChildren>
      </div>
    </>
  );
}
export default App;
