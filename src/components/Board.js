import React from 'react';
import { Card } from './Card';
import './Board.css';

import { useSelector } from 'react-redux';

export const Board = () => {
    
    const game = useSelector(state => state.game);

    return (
        <div className="board">
            {
                game.cards.map(
                    (card, idx) => {
                        return <Card 
                            key = { idx }
                            idx = { idx }
                            icon = { card.icon }
                            isDiscovered = { card.isDiscovered }
                            isComparing = { game.selecteds.indexOf(card) > -1 }
                        />
                    }
                )
            }
        </div>
    )
}
