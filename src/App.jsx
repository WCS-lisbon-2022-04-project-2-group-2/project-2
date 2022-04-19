import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Pokedex from './components/Characters/Pokedex/Pokedex';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pokedex" element={<Pokedex />}></Route>
      </Routes>
    </div>
  );
}

export default App; 