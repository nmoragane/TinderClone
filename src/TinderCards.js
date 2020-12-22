import React, { useState } from 'react';
import './styles/TinderCards.css';
import TinderCard from 'react-tinder-card';


function TinderCards() {
    const[people,setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://media.vanityfair.com/photos/5ebaccf9a0dd2cac274c879d/master/w_2560%2Cc_limit/ElonMusk-ReopeningTesla-GettyImages-855370170.jpg",

        },
        {
            name: 'Nayomal Moragane',
            url: "https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.0-9/117933304_2869038053201277_5943220032492309937_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=XG3xOqbJs9EAX8HvDbs&_nc_ht=scontent.fcmb1-1.fna&oh=a47ea95b58a33c75282441a0905eefc4&oe=60092DE5",

        },
    ]);

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
                        <div style ={{backgroundImage: "url("+person.url+")"}}className="card">
                            <h3>{person.name}</h3>
                        </div>                         
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;