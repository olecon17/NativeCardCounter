/**
 * Created by cfoleary on 7/17/2017.
 */
const suits = ['c', 'h', 'd', 's'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

 class Card {
    value: '';
    shortCode: '';


    createDeck(numDecks) {
        if (numDecks === 0 || numDecks === undefined) {
            numDecks = 6;
        }
        let allDecks = [];
        for (var k = 0; k < numDecks; k++) {

            for (var j = 0; j < suits.length; j++) {
                for (var i = 0; i < values.length; i++) {
                    let newCard = new Card();
                    newCard.value = values[i];
                    newCard.shortCode = values[i] + suits[j]
                    allDecks.push(newCard);
                }
            }
        }
        return allDecks;
    }
}


