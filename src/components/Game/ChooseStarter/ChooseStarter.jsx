import React, {useContext}  from 'react';
import './ChooseStarter.css'
import GameContext from '../../../contexts/GameContext';
import { Link } from 'react-router-dom';
import StarterCard from './StarterCard/StarterCard';

function ChooseStarter(){
    
    return(
        <div>
            <StarterCard />
        </div>
    );
}

export default ChooseStarter;