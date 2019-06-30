import React from 'react';

export const CardView = (props) => {

    const handler = (event) => {
        
    }

    return (
        <div className="card" onClick={handler} id={props.character.id}>
            <img src={props.character.image} alt="logo" className="card__img"></img>
            <p className="card__name">{props.character.name}</p>
        </div>
    );
}