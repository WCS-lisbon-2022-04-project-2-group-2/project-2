import React, {useContext}  from 'react';
import './ChooseStarter.css'
import GameContext from '../../../contexts/GameContext';
import { Link } from 'react-router-dom';

function ChooseStarter(){
    const { generation } = useContext(GameContext);


    console.log(generation)

    return(
        <div>
            <h1>Here we'll choose the starter pokemon</h1>
        </div>
    );
}

export default ChooseStarter;