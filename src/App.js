import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal"
import { useState } from 'react';

function App() {
  let [displayModal, setDisplayModal] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={() => setDisplayModal(true)}>
          Click here to open modal!
        </p>
      </header>

      <Modal />
    </div>
  );
}

export default App;
