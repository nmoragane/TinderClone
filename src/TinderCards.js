import React, { useEffect, useState } from 'react';
import './styles/TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios'


function TinderCards() {
    const[people,setPeople] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData();
    }, []) //adding square brakets is necessary to run this effect only once

    console.log(setPeople)

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardcontainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style ={{backgroundImage: "url("+person.imgUrl+")"}}className="card">
                            <h3>{person.name}</h3>
                        </div>                         
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;