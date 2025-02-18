import './App.css';
import Header from './Header.jsx';
import ParentComponent from './ParentComponent.jsx';
function App() {
  return (
    <>
      <div className='bg-primary card'>
        <Header/>
      </div>
      <div>
        <ParentComponent/>
      </div>
    </>
  );
}
export default App;
