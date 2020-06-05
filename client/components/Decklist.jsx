import React from 'react'
import Zacama from '../../server/public/Zacama.json'

const deckstring = JSON.stringify(Zacama)
const deckparsed = JSON.parse(deckstring)
const deck = deckparsed.ObjectStates[0]
const cardArt = []
console.log(deck.CustomDeck)
const Decklist = () => {
    return (
        <div className='header'>
            <h1>Zacama Decklist</h1>
            <ul>
                {
                    deck.ContainedObjects.map((obj, index) => <li key={index}>{obj.Nickname}<img className = 'cardArt' src = 'https://www.frogtown.me/Images/08df7e63-65d6-4e42-8699-7510453d3100.jpg'></img></li>)
                }
            </ul>
        </div>
    )
}

export default Decklist