import logo from './logo.svg';
import './App.css';

function App() {

  // Parece que devuelve un HTML; pero en realidad devuelve un JSX, que es un pseudolenguaje
  // que se utiliza en los componentes React para poder introducir código, eventos, etc.

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
