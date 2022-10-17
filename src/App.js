import logo from './logo.svg';
import './App.css';

import Login from './Login';
import Register from './Register';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React App</h3>
        <Register />
      <Login />
      </header>
      
    </div>
  );
}

export default App;
