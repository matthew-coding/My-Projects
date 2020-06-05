import React from 'react'
import Zacama from '../../server/public/Zacama.json'

const deckstring = JSON.stringify(Zacama)
const deckparsed = JSON.parse(deckstring)
const deck = deckparsed.ObjectStates[0]
console.log(deck)
const Decklist = () => {
    return (
        <div className='header'>
            <h1>Zacama Decklist</h1>
            <ul>
                {
                    deck.ContainedObjects.map((obj, index) => <li key={index}>{obj.Nickname}</li>)
                }
            </ul>
        </div>
    )
}

export default Decklist