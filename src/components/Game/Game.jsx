import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChooseStarter from './ChooseStarter/ChooseStarter';
import ChooseGeneration from './ChooseGeneration/ChooseGeneration';

function Game() {
    return (
        <Routes>
            <Route path="/game" element={<ChooseGeneration />}></Route>
            <Route path="/choose-starter" element={<ChooseStarter />}></Route>
        </Routes>
    );
}

export default Game;

