import { 
    LOAD_CARDS,
    SELECT_CARD,
    COMPARING_CARDS,
    RESET_GAME,
 } from "../types";
  
 export function loadCardsAction(cards) {
    return (dispatch) => {
        dispatch( loadCards(cards) ) 
    }
 }

export function selectCardAction(cardId) {
    return (dispatch) => {
        dispatch( selectCard(cardId) ) 
    }
}

export function comparingCardsAction() {
    return (dispatch) => {
        dispatch( comparingCards() ) 
    }
}

export function resetGameAction() {
    return (dispatch) => {
        dispatch( resetGame() ) 
    }
}

const loadCards = cards => ({
    type: LOAD_CARDS,
    payload: cards
})

const selectCard = cardId => ({
    type: SELECT_CARD,
    payload: cardId
})

const comparingCards = () => ({
    type: COMPARING_CARDS,
})

const resetGame = () => ({
    type: RESET_GAME,
})
