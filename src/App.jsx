import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import CharactersList from './components/Pokedex/CharactersList/CharactersList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Character" element={<CharactersList />}></Route>
      </Routes>
    </div>
  );
}

export default App;