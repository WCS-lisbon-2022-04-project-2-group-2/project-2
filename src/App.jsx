import React from 'react';
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import './App.css'
import Pokedex from './components/Characters/Pokedex/Pokedex';
import NavBarElements from './components/NavBar/NavBarElements'
import NavBar from './components/NavBar/NavBar';
import PokemonCard from './components/Characters/PokemonCard/PokemonCard';



function App() {
  const location = useLocation()
  const isHomeLocation = location.pathname === "/" 
  
  
  return (
    <div className="App">
      {isHomeLocation ?  <NavBarElements /> : <NavBar/>}
     
      <Routes>
        <Route path="/"/>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokemonCard />} />
      </Routes>
    </div>
  );
}

export default App; 