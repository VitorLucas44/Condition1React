import './App.css';
import React from 'react';
import Connection from './compenents/connection/connection';

function App() {
  let first_Name = 'Vitor';
  return (
    <div>
      {first_Name === 'Vitor' ? (<p>Bienvenue {first_Name}!</p>) : (<p>Vous n'êtes pas la bonne personne.</p>)}
      <Connection/>
    </div>
  );
}

export default App;
