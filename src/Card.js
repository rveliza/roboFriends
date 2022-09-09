import React from 'react';

const Card = (prop) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
            <img src={`https://robohash.org/${prop.id}?set=set4&size=200x200`} alt="robot card" />
            <div>
                <h2>{prop.name}</h2>
                <p>{prop.email}</p>
            </div>
        </div>
    );
}

export default Card;