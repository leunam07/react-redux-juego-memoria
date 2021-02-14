import React from 'react';
import ReactCardFlip from 'react-card-flip';

import { useDispatch, useSelector } from 'react-redux';

import Image from "../assets/skye.png";
import './Card.css';

import { selectCardAction, comparingCardsAction } from "../actions/gameActions";

export const Card = ({idx, icon, isComparing, isDiscovered}) => {

    const style = {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover'
      };

    const dispatch = useDispatch();
    const game = useSelector(state => state.game)

    const selectCard = () => {
        if(game.selecteds.length === 2 || isComparing){
            return;
        }
        if(game.selecteds.length === 1){
            setTimeout(() => {
                dispatch(comparingCardsAction());
            }, 1500);
        }
        dispatch(selectCardAction(idx));
    }

    return (
        <div className="play-card" onClick={selectCard}> 
            <ReactCardFlip
                isFlipped = { isComparing || isDiscovered }
            >
                <div 
                    className="cover"
                    style={style}
                ></div>
                <div className="content">
                    <i className={`fa ${icon} fa-5x icon`}></i>
                </div>
            </ReactCardFlip>
        </div>
    )

}
