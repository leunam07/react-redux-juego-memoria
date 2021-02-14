import shuffle from 'lodash.shuffle';

import { fontAwesomeClasses } from "./fontAwesomeClasses";

const CARD_NUMBER = 20;

export const createCard = () => {
    const cards = [];
    
    while (cards.length < CARD_NUMBER) {
        const idx = Math.floor(Math.random() * fontAwesomeClasses.length);
        const card = {
            icon: fontAwesomeClasses.splice(idx, 1)[0],
            isDiscovered: false
        }

        cards.push(card);
        cards.push({...card});
    }

    return shuffle(cards);
}
