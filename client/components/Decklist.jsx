import React from 'react'
import Zacama from '../../server/public/Zacama.json'

const deckstring = JSON.stringify(Zacama)
const deckparsed = JSON.parse(deckstring)
const deck =  deckparsed.ObjectStates[0].ContainedObjects

const Decklist = () => {
    return (
        <div className='header'>
            <h1>Magic the Gathering Decklist Test</h1>
            <ul>
                {deck.forEach(card => {
                    return (
                        <li>{card.Nickname}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Decklist