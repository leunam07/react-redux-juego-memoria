import { 
    LOAD_CARDS,
    SELECT_CARD,
    COMPARING_CARDS,
    RESET_GAME,
 } from "../types";

import { createCard } from '../utils/createCard';

const initialState = {
    cards: [...createCard()],
    selecteds: [],
    isComparing: false,
    attempts: 0
}

export default function(state = initialState, action){
    switch (action.type) {
        case LOAD_CARDS:
            return {
                ...state,
                cards: [...action.payload  ]
            }
        case SELECT_CARD:
            return {
                ...state,
                selecteds: state.selecteds.length < 2 
                           ? [...state.selecteds, state.cards[action.payload]]
                           : [state.cards[action.payload]]
            }
        case COMPARING_CARDS:
            if(state.selecteds.length < 2){
                return state;
            }
            const [firstCard, secondCard] = state.selecteds;
            if(firstCard.icon === secondCard.icon){
                console.log({firstCard, secondCard});
                return {
                    ...state,
                    selecteds: [],
                    attempts: state.attempts + 1,
                    cards: state.cards.map((card) => {
                        if(card.icon !== firstCard.icon){
                            return card;
                        }
                            return {...card, isDiscovered: true}
                        })
                }
            }else{
                return {
                    ...state,
                    selecteds: [],
                    attempts: state.attempts + 1
                }
            }
        case RESET_GAME:
            return {
                ...initialState,
                cards: [...createCard()]
            };
        default:
            return state;
    }
}